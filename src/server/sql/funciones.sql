CREATE OR REPLACE FUNCTION buscar_pacientes(p_texto TEXT)
RETURNS SETOF pacientes AS $$
  SELECT p.*
  FROM public.pacientes p
  WHERE p.nombre ILIKE '%' || p_texto || '%'
     OR p.especie ILIKE '%' || p_texto || '%'
     OR COALESCE(p.raza, '') ILIKE '%' || p_texto || '%'
  ORDER BY p.nombre;
$$ LANGUAGE sql STABLE;

CREATE OR REPLACE FUNCTION generar_numero_atencion()
RETURNS TEXT AS $$
  SELECT nextval('public.pacientes_numero_atencion_seq'::regclass)::TEXT;
$$ LANGUAGE sql VOLATILE;

CREATE OR REPLACE FUNCTION registrar_paciente(
  p_nombre TEXT,
  p_especie TEXT,
  p_edad TEXT,
  p_raza TEXT,
  p_diagnostico TEXT,
  p_imagen TEXT
) RETURNS pacientes AS $$
  INSERT INTO public.pacientes (
    nombre, numero_atencion, especie, edad, raza, diagnostico, imagen
  )
  VALUES (
    TRIM(p_nombre),
    generar_numero_atencion(),
    TRIM(p_especie),
    NULLIF(TRIM(p_edad), ''),
    NULLIF(TRIM(p_raza), ''),
    p_diagnostico,
    p_imagen
  )
  RETURNING *;
$$ LANGUAGE sql;

CREATE OR REPLACE FUNCTION resumen_por_especie()
RETURNS TABLE (especie VARCHAR, total BIGINT) AS $$
  SELECT p.especie, COUNT(*)
  FROM public.pacientes p
  GROUP BY p.especie
  ORDER BY 2 DESC;
$$ LANGUAGE sql STABLE;

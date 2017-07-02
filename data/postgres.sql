-- Database generated with pgModeler (PostgreSQL Database Modeler).
-- pgModeler  version: 0.8.1
-- PostgreSQL version: 9.4
-- Project Site: pgmodeler.com.br
-- Model Author: ---


-- Database creation must be done outside an multicommand file.
-- These commands were put in this file only for convenience.
-- -- object: postgres | type: DATABASE --
-- -- DROP DATABASE IF EXISTS postgres;
-- CREATE DATABASE postgres
-- ;
-- -- ddl-end --
-- 

-- object: public.et_ads_id_sequence | type: SEQUENCE --
-- DROP SEQUENCE IF EXISTS public.et_ads_id_sequence CASCADE;
CREATE SEQUENCE public.et_ads_id_sequence
	INCREMENT BY 1
	MINVALUE 0
	MAXVALUE 2147483647
	START WITH 1
	CACHE 1
	NO CYCLE
	OWNED BY NONE;
-- ddl-end --
ALTER SEQUENCE public.et_ads_id_sequence OWNER TO postgres;
-- ddl-end --

-- object: public.et_ads | type: TABLE --
-- DROP TABLE IF EXISTS public.et_ads CASCADE;
CREATE TABLE public.et_ads(
	et_id integer NOT NULL DEFAULT nextval('public.et_ads_id_sequence'::regclass),
	et_title varchar(250) NOT NULL,
	et_city_id smallint NOT NULL,
	et_location point NOT NULL,
	CONSTRAINT et_ads_primary_key PRIMARY KEY (et_id)

);
-- ddl-end --
ALTER TABLE public.et_ads OWNER TO postgres;
-- ddl-end --

-- object: public.et_cities_id_sequence | type: SEQUENCE --
-- DROP SEQUENCE IF EXISTS public.et_cities_id_sequence CASCADE;
CREATE SEQUENCE public.et_cities_id_sequence
	INCREMENT BY 1
	MINVALUE 0
	MAXVALUE 2147483647
	START WITH 1
	CACHE 1
	NO CYCLE
	OWNED BY NONE;
-- ddl-end --
ALTER SEQUENCE public.et_cities_id_sequence OWNER TO postgres;
-- ddl-end --

-- object: public.et_cities | type: TABLE --
-- DROP TABLE IF EXISTS public.et_cities CASCADE;
CREATE TABLE public.et_cities(
	et_id smallint NOT NULL DEFAULT nextval('public.et_cities_id_sequence'::regclass),
	et_name varchar(100) NOT NULL,
	et_location point NOT NULL,
	et_zipcode varchar(5) NOT NULL,
	et_insee_code smallint NOT NULL,
	CONSTRAINT et_cities_primary_key PRIMARY KEY (et_id),
	CONSTRAINT et_cities_insee_code UNIQUE (et_insee_code)

);
-- ddl-end --
ALTER TABLE public.et_cities OWNER TO postgres;
-- ddl-end --

-- object: et_ads_city_relation | type: CONSTRAINT --
-- ALTER TABLE public.et_ads DROP CONSTRAINT IF EXISTS et_ads_city_relation CASCADE;
ALTER TABLE public.et_ads ADD CONSTRAINT et_ads_city_relation FOREIGN KEY (et_city_id)
REFERENCES public.et_cities (et_id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --



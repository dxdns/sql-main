---
title: "corrigir erro de taxa stret no nfce"
date: "2020-01-01"
---

<code>
ALTER TABLE NFCE ADD FCP_VALOR
NUMERIC ( 18, 2) DEFAULT 0, ADD FCP_VALORST
NUMERIC ( 18, 2) DEFAULT 0, ADD FCP_VALORRET
NUMERIC ( 18, 2) DEFAULT 0
___________________________________________

ALTER TABLE NFCE_ITENS ADD FCP_TAXA_STRET NUMERIC( 18, 2)

________________________________________________________

ALTER TABLE NFCE_ITENS ADD ANP_GLP_PESO_LIQ NUMERIC( 18, 4)
</code>
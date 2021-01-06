---
title: "corrige icms no sped"
date: "2020-01-01"
---

<code>
**--1**

update PRODUTOS set ecf_icms_st = substring(icms from 1 for 2) where ST = 'T' and ecf_icms_st is null

**--2**
update nfce_itens set icms = (base_icms * taxa_icms) / 100 where taxa_icms > 0 and cancelado = 'N'

**--3**

update nfce set icms = (select sum(icms) from NFCE_ITENS i where i.cancelado = 'N' and i.id_nfce = nfce.id)
where id = (select id_nfce from NFCE_ITENS i where i.cancelado = 'N' and i.id_nfce = nfce.id group by id_nfce)
</code>
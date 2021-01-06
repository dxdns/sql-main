---
title: "corrige valor total nfce"
date: "2020-01-01"
---

<code>update nfce n 
set n.valor_final = (select sum(p.valor) from NFCE_TOTAL_TIPO_PGTO p where p.id_venda_cabecalho = n.id)
where n.id in (select p.id_venda_cabecalho from NFCE_TOTAL_TIPO_PGTO p where p.id_venda_cabecalho = n.id) 
</code>
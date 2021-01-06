---
title: "reverter cancelamento de nfce > mapa resumo"
date: "2020-01-01"
---

<code>
**--1**
update nfce_total_tipo_pgto p set p.estorno = 'N' where p.id_venda_cabecalho in (
select n.id from NFCE n
where n.nfce_status = 'AUTORIZADO' and n.CUPOM_CANCELADO = 'S' and p.id_venda_cabecalho = n.id  
)

**--2**
update nfce_itens i set i.cancelado = 'N' where i.id_nfce in (
select n.id from NFCE n 
where n.nfce_status = 'AUTORIZADO' and n.CUPOM_CANCELADO = 'S' and i.id_nfce = n.id
)

**--3**
update nfce set CUPOM_CANCELADO = 'N', STATUS_VENDA = 'F'
where nfce_status = 'AUTORIZADO'
</code>
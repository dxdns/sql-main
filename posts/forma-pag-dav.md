---
title: "inserir forma de pagamento no dav"
date: "2020-01-01"
---
onde não tem forma de pagamento o comando insere

<code>insert into DAV_TOTAL_TIPO_PGTO (ID_VENDA_CABECALHO, ID_TIPO_PAGAMENTO, VALOR, estorno)
select dav.id as id_venda_cabecalho, '1' as ID_TIPO_PAGAMENTO, dav.total_documento as
valor, 'N' as estorno from dav
left join DAV_TOTAL_TIPO_PGTO on DAV_TOTAL_TIPO_PGTO.ID_VENDA_CABECALHO = DAV.ID
where DAV_TOTAL_TIPO_PGTO.id is null
</code>
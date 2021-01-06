---
title: "inserir forma de pagamento no nfce"
date: "2020-01-01"
---
onde não tem forma de pagamento o comando insere

<code>insert into NFCE_TOTAL_TIPO_PGTO (ID_VENDA_CABECALHO, ID_TIPO_PAGAMENTO, VALOR, estorno)
select nfce.id as id_venda_cabecalho, '12' as ID_TIPO_PAGAMENTO, nfce.total_documento as
valor, 'N' as estorno from NFCE 
left join NFCE_TOTAL_TIPO_PGTO on NFCE_TOTAL_TIPO_PGTO.ID_VENDA_CABECALHO = NFCE.ID
where NFCE_TOTAL_TIPO_PGTO.id is null
</code>
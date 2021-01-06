---
title: "AJUSTAR TRIBUTAÇÃO DO PRODUTO PELA NOTA DE COMPRA"
date: "2020-01-01"
---

<code>merge into produtos a
using(select d.id_produto, substring(d.cst from 1 for 1) as origem,
case when substring(d.cst from 2 for 2) = 20 then 
substring(d.cst from 1 for 1)||'00' 
else 
substring(d.cst from 1 for 1)||substring(d.cst from 2 for 2) end as cst
from NOTA_COMPRA_DETALHE d
where d.id = (select max(e.id) from nota_compra_detalhe e
where e.id_produto = d.id_produto group by e.id_produto)) b
on (a.id_produto = b.id_produto)
when matched then update set
a.origem = b.origem, a.cst = b.cst
update PRODUTOS 
set ST = 'F', CSOSN = 500, CST = '060', ECF_ICMS_ST = 'FF', ICMS = 0
where substring(CST from 2 for 2) = '60';

update PRODUTOS 
set ST = 'T', CSOSN = 102, CST = '000', ECF_ICMS_ST = '18', ICMS = 18 
where substring(CST from 2 for 2) = '00'; 

update PRODUTOS 
set ST = 'I', CSOSN = 103, CST = '040', ECF_ICMS_ST = 'II', ICMS = 0
where substring(CST from 2 for 2) = '40';<>
</code>
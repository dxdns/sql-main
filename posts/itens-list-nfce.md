---
title: "listar itens de uma nfce"
date: "2020-01-01"
---

<code>select n.nfce_numero, i.item, i.QUANTIDADE, i.VALOR_UNITARIO, i.VALOR_TOTAL 
from nfce_itens i
left join nfce n on n.id = i.id_nfce
where n.NFCE_STATUS = 'PROCESSADO' and n.nfce_numero = X
order by n.nfce_numero
</code>
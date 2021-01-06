---
title: "corrigir base de icms nfce"
date: "2020-01-01"
---

<code>merge into nfce a
using(select i.id_nfce, sum(i.total_item) as bc_icms, 
sum((i.total_item * i.TAXA_ICMS) / 100) as icms from nfce_itens i 
where i.TAXA_ICMS > 0 and i.CANCELADO = 'N' group by i.id_nfce) b
on (a.id = b.id_nfce)
when matched then update set
a.base_icms = b.bc_icms, a.icms = b.icms
</code>
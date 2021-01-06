---
title: "pis e cofins de saída monofásico"
date: "2020-01-01"
---

<code>
**--1**
update produtos set ALIQ_PIS_SAIDA = 0
where CST_PISCOFINS_SAIDA = 4

**--2**
update produtos set ALIQ_COFINS_SAIDA = 0
where CST_PISCOFINS_SAIDA = 4
</code>
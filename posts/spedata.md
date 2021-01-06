---
title: "corrige data de saída nfce > sped"
date: "2020-01-01"
---

<code>
**--1**

update NFCE set nfce_data_saida = nfce_data_emissao

**--2**

update NFCE set data_venda = nfce_data_emissao
</code>
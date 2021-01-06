---
title: "corrige a unidade comercial dos produtos"
date: "2020-01-01"
---

<code>update produtos set unidade_comecial = 'UN' 
where unidade_comecial not in 
(select sigla from unidade_medida where sigla = unidade_comecial)
</code>
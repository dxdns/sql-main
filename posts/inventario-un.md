---
title: "corrige a unidade dos produtos do inventário"
date: "2020-01-01"
---

<code>update inventario_itens set unidade = 'UN' 
where unidade not in 
(select sigla from unidade_medida where sigla = unidade)
</code>
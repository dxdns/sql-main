---
title: "remove mde duplicado"
date: "2020-01-01"
---

<code>delete from mde
where 
  chave in 
  (select chave
  from mde
  group by chave
  having count(chave) > 1)
</code>
---
title: "inativar produtos com estoque zero"
date: "2020-01-01"
---

<code>update produtos set status = 'INATIVO'
where estoque = 0
</code>
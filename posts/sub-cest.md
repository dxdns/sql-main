---
title: "aplicar a substituição em produtos com cest"
date: "2020-01-01"
---

<code>update PRODUTOS
set ST = 'F', CSOSN = 500, CST = '060', ECF_ICMS_ST = 'FF', ICMS = 0
where char_length(CEST) > 0
</code>
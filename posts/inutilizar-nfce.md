---
title: "inutilizar nfce"
date: "2020-01-01"
---
altera o status para inutilizado

<code>
**--INUTILIZAR NFCE POR NUMERAÇÃO**

update nfce set nfce_status = 'INUTILIZADO'
where nfce_numero = x

**--INUTILIZAR NFCE POR NUMERAÇÃO E SÉRIE**

update nfce set nfce_status = 'INUTILIZADO'
where nfce_numero = x and nfce_serie = y

**--INUTILIZAR NFCE POR STATUS**

update nfce set nfce_status = 'INUTILIZADO'
where nfce_status = 'PROCESSADO'
</code>
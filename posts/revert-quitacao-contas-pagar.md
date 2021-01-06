---
title: "reverter quitação no contas a pagar"
date: "2020-01-01"
---

<code>update contas_pagar set situacao = 'ABERTO', DT_QUITACAO = null, VLR_QUITACAO = null
where id = 1
</code>
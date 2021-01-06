---
title: "alterar tipo de pagamento no contas a pagar"
date: "2020-01-01"
---
**exemplo:** PZ para DP

<code>update contas_pagar set tipo_doc = 'DP'
where tipo_doc = 'PZ'
</code>
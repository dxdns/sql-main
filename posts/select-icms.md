---
title: "consultar diferença na base de calculo icms"
date: "2020-01-01"
---

<code>
**1--pela numeração**

SELECT i.*, n.base_icms as bc_venda
FROM (
  SELECT I.id_nfce, SUM(I.base_icms) AS BC_ITENS
  FROM NFCE N
  INNER JOIN NFCE_ITENS I ON I.id_nfce = N.ID
  WHERE NFCE_NUMERO BETWEEN 416525 AND 417270 AND CUPOM_CANCELADO = 'N' AND
    N.nfce_status IN ('AUTORIZADO', 'CONTIGENCIA') AND I.cancelado = 'N'
  GROUP BY 1 ) i
inner join nfce n on n.id = i.id_nfce
where i.bc_itens <> n.base_icms



**2--pela data**

SELECT i.*, n.base_icms as bc_venda
FROM (
  SELECT I.id_nfce, SUM(I.base_icms) AS BC_ITENS
  FROM NFCE N
  INNER JOIN NFCE_ITENS I ON I.id_nfce = N.ID
  WHERE data_venda BETWEEN '2020-10-09' AND '2020-10-09' AND CUPOM_CANCELADO = 'N' AND
    N.nfce_status IN ('AUTORIZADO', 'CONTIGENCIA') AND I.cancelado = 'N'
  GROUP BY 1 ) i
inner join nfce n on n.id = i.id_nfce
where i.bc_itens <> n.base_icms
</code>
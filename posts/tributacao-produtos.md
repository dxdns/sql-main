---
title: "tributação dos produtos"
date: "2020-01-01"
---

<code>
**--1 substitução tributária**
update PRODUTOS
set ST = 'F', CSOSN = 500, CST = '060', ECF_ICMS_ST = 'FF', ICMS = 0
where ICMS = 0

**--2 tributado**
update PRODUTOS 
set ST = 'T', CSOSN = 102, CST = '000', ECF_ICMS_ST = '18', ICMS = 18
where ICMS = 18
     
**EXEMPLO DE 18**

**--3 isento**
update PRODUTOS 
set ST = 'I', CSOSN = 103, CST = '040', ECF_ICMS_ST = 'II', ICMS = 0
where ICMS = 0

**--4 não tributado**
update PRODUTOS 
set ST = 'N', CSOSN = 400, CST = '041', ECF_ICMS_ST = 'NN', ICMS = 0
where ICMS = 0
</code>
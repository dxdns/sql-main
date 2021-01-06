---
title: "consultar pulo de numeração"
date: "2020-01-01"
---

<code>execute block
returns (teste int)
as
declare variable iID int;
declare variable idNUM int;
begin

  iID = 0;

  for select distinct id_cliente from clientes where id_cliente is not null order by id_cliente into :idNUM do
  begin
    iID = iID + 1;

    while (iID < idNUM) do begin
      TESTE = iID;
      iID = iID + 1;
      suspend;
    end

  end


end
</code>
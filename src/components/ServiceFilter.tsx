'use client'

import { Heading } from './Heading'
import { ServiceIcon } from './ServiceIcon'

export function ServiceFilter() {
  return (
    <div className="flex flex-col text-primary py-20 items-center gap-9">
      <Heading size="sm" className="text-center text-primary">
        Filtrar por serviço
      </Heading>

      <div className="flex gap-6 child:cursor-pointer">
        <ServiceIcon serviceType="pintor" border={true} isFilter={true} />
        <ServiceIcon serviceType="pedreiro" border={true} isFilter={true} />
        <ServiceIcon serviceType="encanador" border={true} isFilter={true} />
        <ServiceIcon serviceType="eletricista" border={true} isFilter={true} />
        <ServiceIcon serviceType="jardineiro" border={true} isFilter={true} />
      </div>
    </div>
  )
}

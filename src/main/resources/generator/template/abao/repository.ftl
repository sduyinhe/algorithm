package ${basePackage}.repository

import ${modelPackage}.${prefix}.${modelName}
import org.springframework.data.jpa.repository.JpaSpecificationExecutor
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository

/**
* Created by ${author} on ${date}.
*/
@Repository
interface I${modelName}Repository extends PagingAndSortingRepository<${modelName}, Long>,
    JpaSpecificationExecutor<${modelName}> {

}

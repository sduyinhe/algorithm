package ${servicePackage}.impl

import ${servicePackage}.I${modelName}Service
import ${modelPackage}.${prefix}.${modelName}
import ${servicePackage}.repository.I${modelName}Repository
import groovy.transform.TupleConstructor
import groovy.util.logging.Slf4j
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.jpa.domain.Specification
import org.springframework.stereotype.Service

import javax.persistence.criteria.CriteriaBuilder
import javax.persistence.criteria.CriteriaQuery
import javax.persistence.criteria.Expression
import javax.persistence.criteria.Order
import javax.persistence.criteria.Predicate
import javax.persistence.criteria.Root
import java.time.LocalDate

/**
 * Created by ${author} on ${date}.
 */
@Slf4j
@TupleConstructor(includeFields = true)
@Service
class ${modelName}Service implements I${modelName}Service {

    @Autowired
    I${modelName}Repository ${modelNameLowerCamel}Repository

    @Override
    Object add${modelName}(${modelName} ${modelNameLowerCamel}) {
        ${modelNameLowerCamel}Repository.save(${modelNameLowerCamel})
    }

    @Override
    List<${modelName}> findAllYesterday() {
        ${modelNameLowerCamel}Repository.findAll new Specification<${modelName}>() {

            LocalDate now = LocalDate.now()

            @Override
            Predicate toPredicate(Root<${modelName}> root, CriteriaQuery<?> query,
                                  CriteriaBuilder criteriaBuilder) {
                query.where(criteriaBuilder.and(
                    criteriaBuilder.lessThanOrEqualTo(root.<Date> get('formTime'), now.toDate()),
                    criteriaBuilder.equal(root.get('formStatus'), 1)
                )).orderBy(new Order() {

                    @Override
                    Order reverse() {
                        null
                    }

                    @Override
                    boolean isAscending() {
                        false
                    }

                    @Override
                    Expression<?> getExpression() {
                        root.<Date> get('formTime')
                    }

                }).restriction
            }

        }
    }

}

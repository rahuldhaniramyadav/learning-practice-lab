$ magento-cloud login - It is used to do authenticate our shell with adobe acoount.

$ magento-cloud project:list - List down all the project associated on adobe account. If we working on single project and our email is assigned it to it shows somethng like below 

  Your projects are:
      +---------------+-----------------+--------------------+
      | ID            | Title           | Region             |
      +---------------+-----------------+--------------------+
      | r5kqqq8lopw6m | <NAME_OF_PROJECT> | ap-1.magento.cloud

$ magento-cloud environment:list

  It prompt for choose project id, In single project it will be 0, After entering 0 it shows the all available enviornments, By default each project has 5 environments which is as follows

  Your environments are: 
            +--------------------+--------------+--------+-------------+
            | ID                 | Title        | Status | Type        |
            +--------------------+--------------+--------+-------------+
            | master             | Master       | Active | development |
            |   production       | Production   | Active | production  |
            |     staging        | Staging      | Active | staging     |
            |       integration  | Integration  | Active | development |
            |       integration2 | Integration2 | Active | development |
            +--------------------+--------------+--------+-------------+

  We only wok on production, staging, integration and integration2.

$ magento-cloud ssh -p <PROJECT_ID> -e integration => To connect a specific environment ssh we need to use project id and name of the environment

$ magento-cloud sql -e integration "SELECT scope,scope_id,path,value FROM core_config_data WHERE path like 'test%'" - It will ask for the project id and print the result of integration sql 

$ magento-cloud variable:list -p <PROJECT_ID> -e integration - It will show all the environment variables of particular environment

## Convenção de Portas

Convenção de portas organizada em **famílias**, para facilitar a identificação, priorização e manutenção da stack.  
As *well-known ports* (0–1023) **não devem ser utilizadas**. Nosso padrão inicia em **1100+**.

| Família                                      | Serviço                  | Porta | Exemplos                          |
|----------------------------------------------|--------------------------|-------|-----------------------------------|
| **Serviços Core (1000–2000)**                | **Identity Provider**    | 1100  | Keycloak                          |
|                                              | **Banco de Dados 1**     | 1200  | SQL Server                        |
|                                              | **Banco de Dados 2**     | 1201  | MongoDb                           |
|                                              | **Message Broker 1**     | 1300  | Kafka                             |
|                                              | **Message Broker 2**     | 1301  | RabbitMQ                          |
|                                              | **Cache 1**              | 1400  | Redis                             |
| **Web APIs (2000–3000)**                     | **Web API 1**            | 2001  | boraencontros-api                 |
|                                              | **Web API 2**            | 2002  |                                   |
| **Workers & Jobs (3000–4000)**               | **Workers 1**            | 3001  | boraencontros-workers             |
|                                              | **Jobs 1**               | 3002  |                                   |
|                                              | **Jobs 2**               | 3003  |                                   |

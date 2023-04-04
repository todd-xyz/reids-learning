- [redis](#redis)
  - [1. 什么是Redis](#1-什么是redis)
    - [feature:](#feature)
  - [2. redis-cli](#2-redis-cli)
  - [3. redis数据结构](#3-redis数据结构)
  - [4. comamnd](#4-comamnd)
    - [4.1 Generic commands](#41-generic-commands)
    - [4.2. String](#42-string)
    - [4.3. List](#43-list)
    - [4.4 Hash](#44-hash)
    - [4.5 Set 是String类型无序集合，成员是唯一](#45-set-是string类型无序集合成员是唯一)
    - [4.6. Sorted Set 有序集合](#46-sorted-set-有序集合)

# redis
## 1. 什么是Redis
 Remote Dictionary Server.缓存型，key-value数据库，非关系型，开源的BSD
 ### feature:
 1. 缓存数据库，与关系型数据库结合使用
 2. 轻量级的消息队列
   
## 2. redis-cli
redis-cli [options] [commpand]
options:
+ -h host
+ -p port
+ -a auth
  
## 3. redis数据结构
| number | type     | sample                   |
| ------ | -------- | ------------------------ |
| 1      | String   | Hello word               |
| 2      | Hash     | { name: xuetao, age: 50} |
| 3      | List     | [A->B->C-C> ]            |
| 4      | Set      | {A,B,C}                  |
| 5      | SotedSet | {A:1,B:2,C:3}            |
| 6      | Geo      | A:(120.3,30.5)           |
| 7      | bitmap   | 01101010101001           |
| 8      | HyperLog | 01101010101001           |

## 4. comamnd

### 4.1 Generic commands

  - `KEYS pattern`  : Returns all keys matching pattern.
  - `DEl` key : Delete a key.
  - `EXists` key :  Determine if a key exists.
  - `EXPIRE` key seconds :  Set a key's time to live in seconds.
  - `TTL` key : Get the time to live for a key in seconds, TTL(Time To Live).
    
   
### 4.2. String
  key 结构

   | key            | value                                 |
   | -------------- | ------------------------------------- |
   | cyh:user:id    | {id:1, name:xuetao, age:50}           |
   | cyh:product:id | { id:1, title:'computer', price:1000} |

   + `SET` key value: Set the string value of a key
   + `GET` key: Get the value of a key
   + `MSET` key value [key value ...] : Set multiple keys to multiple values.
   + `INCR` key : Increment the integer value of a key by one.
   + `INCRBY` key increment : Increment the integer value of a key by the given amount.
   + `INCRBYFLOAT` key increment: Increment the float value of a key by the given amount.
   +  `SETNX` key value: Set the value of a key, only if the key does not exist
   +  `SETEX` key seconds value: Set the value and expiration of a key
  
 
   
### 4.3. List
  + `LPUSH` myfamilies 'xuetao'
  + `RPUSH` myfamilies "zw"
  + `lpop/rpop` 1
  + `lrange` myfamilies 0 -1
  + `llen` myfamilies

### 4.4 Hash
  Hash类型也叫散列，其中value是一个无序字典。String存储为Json,修改不方便。
  + `HSET` key field value [field value ...]:Set the string value of a hash field
  +  `HGET` key field : Get the value of a hash field
  +  `HGETALL` key : Get all the fields and values in a hash
  +  `HKEYS` key : Get all the fields in a hash
  +  `HVALS` key : Get all the values in a hash

### 4.5 Set 是String类型无序集合，成员是唯一
  + `sadd` hobies boxing
  + `sadd` hobies running
  + `smembers` hobies
  + `srem hobies` running
### 4.6. Sorted Set 有序集合
   唯一，有序，与score关联
   +  `zadd` age 51 xuetao
   +  `zadd` age 19 xrz
   +  `zadd` age 47 zw
   +  `zrang` age 0 -1 withscores
   +  `zrangbyscore` age 20 60
   +  `zrem` age xt

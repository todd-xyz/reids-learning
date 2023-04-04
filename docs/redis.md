# redis
## 什么是Redis
 Remote Dictionary Server.缓存型，key-value数据库，非关系型，开源的BSD
 ### feature:
 1. 缓存数据库，与关系型数据库结合使用
 2. 轻量级的消息队列

## comamnd
### 1. String
   + set key value
   + get key
   + del key
   + keys *
### 2. List
  + LPUSH myfamilies 'xuetao'
  + RPUSH myfamilies "zw"
  + lpop/rpop 1
  + lrange myfamilies 0 -1
  + llen myfamilies

### 3 Hash
  + hset me name xuetao
  + hset me age 50
  + hgetall me     
  + hexists me male

### 4 Set 是String类型无序集合，成员是唯一
  + sadd hobies boxing
  + sadd hobies running
  + smembers hobies
  + srem hobies running
### 5. Sorted Set 有序集合
   唯一，有序，与score关联
   +  zadd age 51 xuetao
   +  zadd age 19 xrz
   +  zadd age 47 zw
   +  zrang age 0 -1 withscores
   +  zrangbyscore age 20 60
   +  zrem age xt

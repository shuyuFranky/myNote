### Redis

##### 一、简介

> ###### 概述
>
> - Redis 是完全开源免费的，遵守BSD协议，是一个高性能的key-value数据库。
>
> - Redis 与其他 key - value 缓存产品有以下三个特点：
>
>   - > Redis支持数据的持久化，可以将内存中的数据保存在磁盘中，重启的时候可以再次加载进行使用。
>
>   - > Redis不仅仅支持简单的key-value类型的数据，同时还提供list，set，zset，hash等数据结构的存储。
>
>   - > Redis支持数据的备份，即master-slave模式的数据备份。
>
> ###### 优势
>
> - 性能极高 – Redis能读的速度是110000次/s,写的速度是81000次/s 。
> - 丰富的数据类型 – Redis支持二进制案例的 Strings, Lists, Hashes, Sets 及 Ordered Sets 数据类型操作。
> - 原子 – Redis的所有操作都是原子性的，同时Redis还支持对几个操作全并后的原子性执行。
> - 丰富的特性 – Redis还支持 publish/subscribe, 通知, key 过期等等特性。
>
> ###### 与其它key-value不同
>
> - Redis有着更为复杂的数据结构并且提供对他们的原子性操作，这是一个不同于其他数据库的进化路径。Redis的数据类型都是基于基本数据结构的同时对程序员透明，无需进行额外的抽象。
> - Redis运行在内存中但是可以持久化到磁盘，所以在对不同数据集进行高速读写时需要权衡内存，因为数据量不能大于硬件内存。在内存数据库方面的另一个优点是，相比在磁盘上相同的复杂的数据结构，在内存中操作起来非常简单，这样Redis可以做很多内部复杂性很强的事情。同时，在磁盘格式方面他们是紧凑的以追加的方式产生的，因为他们并不需要进行随机访问。

##### 二、安装

> **Linux**
>
> ```shell
> $ wget http://download.redis.io/releases/redis-2.8.17.tar.gz
> $ tar xzf redis-2.8.17.tar.gz
> $ cd redis-2.8.17
> $ make
> ```
>
> make完后 redis-2.8.17目录下会出现编译后的redis服务程序redis-server,还有用于测试的客户端程序redis-cli,两个程序位于安装目录 src 目录下
>
> 下面启动redis服务:
>
> ```shell
> $ cd src
> $ ./redis-server
> ```
>
> 注意这种方式启动redis 使用的是默认配置。也可以通过启动参数告诉redis使用指定配置文件使用下面命令启动。
>
> ```shell
> $ cd src
> $ ./redis-server redis.conf
> ```
>
> redis.conf是一个默认的配置文件。我们可以根据需要使用自己的配置文件。
>
> 启动redis服务进程后，就可以使用测试客户端程序redis-cli和redis服务交互了。 比如：
>
> ```shell
> $ cd src
> $ ./redis-cli
> redis> set foo bar
> OK
> redis> get foo
> "bar"
> ```

> **相关配置修改见连接：** http://www.runoob.com/redis/redis-conf.html

##### 三、数据类型

> ###### String

> > > string是redis最基本的类型，你可以理解成与Memcached一模一样的类型，一个key对应一个value。
> > >
> > > string类型是二进制安全的。意思是redis的string可以包含任何数据。比如jpg图片或者序列化的对象 。
> > >
> > > string类型是Redis最基本的数据类型，一个键最大能存储512MB。

> ###### Hash
>
> > > Redis hash 是一个键值对集合。
> > >
> > > Redis hash是一个string类型的field和value的映射表，hash特别适合用于存储对象。
> >
> > 实例
> >
> > ```shell
> > 127.0.0.1:6379> HMSET user:1 username runoob password runoob points 200
> > OK
> > 127.0.0.1:6379> HGETALL user:1
> > 1) "username"
> > 2) "runoob"
> > 3) "password"
> > 4) "runoob"
> > 5) "points"
> > 6) "200"
> > ```

> ###### List

> > > Redis 列表是简单的字符串列表，按照插入顺序排序。你可以添加一个元素到列表的头部（左边）或者尾部（右边）。

> ###### Set
>
> > > Redis的Set是string类型的无序集合。
> > >
> > > 集合是通过哈希表实现的，所以添加，删除，查找的复杂度都是O(1)。
> >
> > sadd 命令
> >
> > 添加一个string元素到,key对应的set集合中，成功返回1,如果元素已经在集合中返回0,key对应的set不存在返回错误。
> >
> > ```shell
> > sadd key member
> > ```

> ###### zset
>
> > > Redis zset 和 set 一样也是string类型元素的集合,且不允许重复的成员。不同的是每个元素都会关联一个double类型的分数。redis正是通过分数来为集合中的成员进行从小到大的排序。zset的成员是唯一的,但分数(score)却可以重复。
> >
> > zadd 命令
> >
> > 添加元素到集合，元素在集合中存在则更新对应score
> >
> > ```
> > zadd key score member 
> > ```

##### Redis 命令

> 

##### Redis 高级

> 


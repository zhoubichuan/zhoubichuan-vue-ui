/**
 *为LRU cache设计一个数据结构，它支持两个操作：
 *1.get(key)：如果key在cache中，则返回对应的value值，否则返回-1
 *2.set(key,value):如果key不在cache中，则将该(key,value)插入cache中（注意，如果cache已满则必须把最近未使用的元素从cache中删除）;如果key在cache中，则重置value值
 *
 */
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.members = [];
  }
  put(key, value) {
    let found = false;
    let oldestIndex = -1;
    let oldestAge = -1;
    for (let i = 0; i < this.members.length; i++) {
      let member = this.members[i];
      if (member.age > oldestAge) {
        oldestIndex = i;
        oldestAge = member.age;
      }
      if (member.key == key) {
        this.members[i] = { key, value, age: 0 };
        found = true;
      } else {
        member++;
      }
    }
    if (!found) {
      if (this.members.length >= this.capacity) {
        this.members.splice(oldestIndex, 1);
      }
      this.members[this.members.length] = {
        key,
        value,
        age: 0
      };
    }
  }
  get(key) {
    for (let i = 0; i < this.members.length; i++) {
      let member = this.members[i];
      if (this.member.key == key) {
        member.age = 0;
        return member.value;
      }
    }
    return -1;
  }
}

// Only handle keys of type string

// Use the following snippet when accessing a bucket through an index
/*
if (index < 0 || index >= buckets.length) {
   throw new Error("Trying to access index out of bound");
 }
*/

import LinkedList from './linkedList.js';

class hashMap {
    constructor(capacity=16, loadFactor=0.75) {
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.buckets = new Array(capacity);
    }

    hash(string) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < string.length; i++) {
            hashCode = primeNumber * hashCode + string.charCodeAt(i);
        }
        return hashCode % this.capacity;
    }

    // Return array containing each key, value pair
    entries() {    
        let allData = [];
        this.buckets.forEach(bucket => {
            allData = allData.concat(bucket.transformIntoArray());
        });
        return allData;
    }

    // Return an array containing all keys in hash map
    keys() {
        let allKeys = [];
        this.entries().forEach(data => allKeys = allKeys.concat(Object.keys(data)));
        return allKeys;
    }

    // Return array containing all values in hash map
    values() {
        let allValues = [];
        this.entries().forEach(data => allValues = allValues.concat(Object.values(data)));
        return allValues;    
    }

    // Returns true/false based on whether the key is in hashmap
    has(key) {
        console.log(this.keys().includes(key));
        if (this.keys().includes(key)) {
            return true;
        } else {
            return false;
        }
    }

    // Return number of stored keys in hash map
    length() {    
        return this.keys().length;
    }

    // Returns a value representing the current capacity of the hashmap
    currentLoad() {
        let filledBuckets = 0;
        this.buckets.forEach((bucket) => {
            if (bucket !== undefined) {
                filledBuckets++;
            };
        });
        return filledBuckets/this.capacity;
    };

    // Returns the value assigned to the key; if no key, returns null
    get(key) {
        const currentBucket = this.buckets[this.hash(key)];
        if (!this.has(key)) {
            return null;
        } else {
            const nodeIndex = currentBucket.find(key);
            const keyValuePair = currentBucket.at(nodeIndex).value;
            return keyValuePair.key;
        }
    }
    
    // Assigns value to key. If key already exists, then old value is overwritten
    set(key, value) {      
        if (this.has(key)) {
            const nodeIndex = this.buckets[this.hash(key)].find(key);
            this.buckets[this.hash(key)].at(nodeIndex).value = {[key]: value}
        } else {
            if (this.buckets[this.hash(key)] === undefined) {
                const newList = new LinkedList();                
                this.buckets[this.hash(key)] = newList;
            } 
        this.buckets[this.hash(key)].append({[key]: value});
        };
        console.log(this.currentLoad());
    }
        
    // Double the size of the array
    expand() {
        // create copy of old buckets array
        // double array capacity
        // create new buckets with new capacity
        // copy nodes in old buckets to new buckets
        // oldbuckets.foreach ((bucket) +> {
        //  walk through linkedList, for each item in linkedList
        //      run hash key to find index of new bucket
        //      set key value for new buckets list    
        // })

    }

    // Remove entry at key, then return true; if key isn't in hash, return false
    remove(key) {
        if (this.has(key)) {
            this.buckets[this.hash(key)].remove(key);
            return true;
        } else {
            return false;
        }
    }

    // Remove all entries in hash map
    clear () {    
        this.capacity = 16;
        this.buckets = new Array(this.capacity);
    }


}

const hashMap1 = new hashMap();
hashMap1.set("chicken", "nugget");
hashMap1.set("green", "beans");
hashMap1.set("vanilla", "ice cream");
hashMap1.set("lincoln", "logs");
hashMap1.set("fried", "pickles");
hashMap1.set("cotton", "candy");
hashMap1.set("adaadchicken", "dffdfdnugget");
hashMap1.set("greedfvdvn", "bedvvdvdvdans");
hashMap1.set("vanilsssla", "iceaaaas cream");
hashMap1.set("lasdasdaincoln", "lsadsdsadogs");
hashMap1.set("fricdscsdced", "picwerwerwekles");
hashMap1.set("cottfsdefseveson", "canvsevevsevdy");
hashMap1.set("caaaaaahicken", "qqqqqqqqnugget");
hashMap1.set("greeeeeeeeeeen", "berrrrrrreans");
hashMap1.set("vaniltttttttla", "icyyyyyyyye cream");
hashMap1.set("lincuuuuuuuoln", "liiiiiiiiiiiogs");
hashMap1.set("fooooooooried", "ppppppppickles");
hashMap1.set("caaaaaaaaaotton", "ssssssssssssscandy");
hashMap1.set("adddddddddaadchicken", "ddfffffffdffdfdnugget");
hashMap1.set("grgggggggeedfvdvn", "ggghhhhhhhhbedvvdvdvdans");
hashMap1.set("vanjjjjjjjjilsssla", "icekkkkkkkkkaaaas cream");
hashMap1.set("lallllllllsdasdaincoln", "lszzzzzzzzadsdsadogs");
hashMap1.set("frxxxxxxxicdscsdced", "pcccccccicwerwerwekles");
hashMap1.set("cotcvvvvvvtfsdefseveson", "cbbbbbbbanvsevevsevdy");
console.log(hashMap1);


//hashMap1.clear();
//console.log(hashMap1);

/*const linkedList1 = new LinkedList();
linkedList1.append({'chicken': 'nugget'});
linkedList1.append({'vanilla': 'ice cream'});
linkedList1.append({'green': 'beans'});

console.log(linkedList1);

linkedList1.remove('vanilla');

console.log(linkedList1);
*/
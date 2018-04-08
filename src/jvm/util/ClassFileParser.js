

/*
  The ClassFile structure from JVM spec version 8:
  https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.1


  */

const ClassFile = [
    [{name: 'magic', size: 4}],
    [{name: 'minor_version', size: 2}],
    [{name: 'major_version', size: 2}],
    [{name: 'constant_pool_count', size: 2}],
    [{name: 'constant_pool', size: 'constant_pool_count', type: 'cp_info'}],
    [{name: 'access_flags', size: 2}],
    [{name: 'this_class', size: 2}],
    [{name: 'super_class', size: 2}],
    [{name: 'interfaces_count', size: 2}],
    [{name: 'interfaces', size: 'interfaces_count', type: 'u2'}],
    [{name: 'fields_count', size: 2}],
    [{name: 'fields', size: 'fields_count', type: 'field_info'}],
    [{name: 'methods_count', size: 2}],
    [{name: 'methods', size: 'methods_count', type: 'method_info'}],
    [{name: 'attributes_count', size: 2}],
    [{name: 'attributes', size: 'attributes_count', type: 'attribute_info'}]
];

const ClassFileParser = (class_file_bytes) => {
};

console.log(ClassFile.length);

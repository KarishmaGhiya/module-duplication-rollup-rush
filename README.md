# module-duplication-rollup-rush

## Repro for duplication of dependencies issue
This repro is a work in progress. For now, you can :
`rush install`
`rush build`

To generate rollup output do:
- `cd lib-aaa` 
- `rushx build:test:browser`
Find the rollup output generated under : `lib-aaa\test-browser\index.js`

There are two libraries `lib-aaa` and `lib-bee` 
And an external dependency : `lib-sea`
The `lib-aaa`  depends on `lib-sea` and `lib-bee` v 1.0.0 
The `lib-bee` depends on `lib-sea`

### What is happening?
- Two copies of `lib-sea` package created under node-modules for lib-aaa :
1. under `lib-aaa\node_modules\lib-sea`
2. under `lib-aaa\node_modules\lib-bee\node_modules\lib-sea`

- I am also trying to replicate the issue with service-bus for two copies of lib-sea in the rollup output
- But I am not getting two copies of lib-sea in the rollup output

For using `buffer` in-place of `lib-sea` refer this repository : https://github.com/KarishmaGhiya/module-rollup-buffer
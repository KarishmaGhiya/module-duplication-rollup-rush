# module-duplication-rollup-rush

## Repro
This repro is a work in progress. For now, you can :
`rush install`

There are two libraries `lib-aaa` and `lib-bee` 
And an external dependency : `lib-sea`
The `lib-aaa`  depends on `lib-sea` and `lib-bee` v 1.0.0 
The `lib-bee` depends on `lib-sea`

### What is happening?
- Two copies of `buffer` package created under node-modules for lib-aaa :
1. under `lib-aaa\node_modules\lib-sea`
2. under `lib-aaa\node_modules\lib-bee\node_modules\lib-sea`

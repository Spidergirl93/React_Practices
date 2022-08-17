# Introduction

In this repository, redux was replaced by other react hooks. First, useContext was used to create a shared memory between all the components. But since useContext is not designed for frequent changes, a (super confusing!) custome hook is created to store and share the data through the whole application and dispatch functions to maniplulate that shared data. 


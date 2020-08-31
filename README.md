#react-smooth-counter
![](https://user-images.githubusercontent.com/47715137/91746549-13196880-ebbd-11ea-987f-bb46e82d73d2.gif)
###Install
```
npm i react-smooth-counter
```
###Basic usage:
```jsx
<SmoothCounter
    delay={0}
    startNumber={0}
    to={852}
    style={{color: 'grey', fontSize: 50, fontWeight: 'bold', width: '100%'}}
    className={'randomClass'}
/>
```
###Props
necessarily(*)

| Props  | Functionality |
| ------------- | ------------- |
| delay  | Time period before counting. |
| startNumber | Start number. |
| to* | End number. |
| style | JavaScript style object. |
| className | CSS classes. |
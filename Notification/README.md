## Notification React Native

### Explain
This is not like the normal notifications
![Notification Example](https://github.com/ElJhonnypro/LinkedinProjects/blob/main/ImagesProjects/ExampleNotification.png?raw=true)

go to component > Notification
in the index you can see it how it works

Notification Rute
###### components > Notification.tsx
Notification Example
##### app > (tabs) > index.tsx

#### How to use
```tsx
<Notification
    text='this is a info notification'
    subtitle=''
    type={error ? "info" : "error"}
    duration={3000} //ms
/>
<>
```
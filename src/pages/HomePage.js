const HomePage = ({ goto }) => (

    <div style={{ height: '100vh', backgroundColor: 'blue' }}>
        <h1>WELCOME TO THIS AMAZING SITE!</h1>
        <p>Navigate: 
          <a onClick={goto('home')}>Home</a>
          &nbsp;|&nbsp;
          <a onClick={goto('about')}>About</a>
          &nbsp;|&nbsp;
          <a onClick={goto('contact')}>Contact</a>
        </p>
        <p>Imperdiet proin fermentum leo vel orci porta non. Enim ut sem viverra aliquet eget sit amet tellus cras. Habitant morbi tristique senectus et netus et malesuada fames. Pretium lectus quam id leo in vitae. Sodales ut etiam sit amet nisl purus in mollis nunc. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Sit amet justo donec enim diam vulputate ut pharetra. Velit ut tortor pretium viverra suspendisse potenti nullam. Vitae aliquet nec ullamcorper sit amet risus. Arcu dui vivamus arcu felis bibendum ut. Viverra orci sagittis eu volutpat odio facilisis mauris. Sed sed risus pretium quam vulputate dignissim suspendisse. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Faucibus in ornare quam viverra orci sagittis eu. Massa vitae tortor condimentum lacinia quis vel. Adipiscing bibendum est ultricies integer. Consectetur adipiscing elit pellentesque habitant morbi. Sit amet porttitor eget dolor morbi non arcu risus quis. Ut sem viverra aliquet eget. Vitae tempus quam pellentesque nec.</p>
        <p>Donec adipiscing tristique risus nec feugiat in fermentum. Penatibus et magnis dis parturient montes nascetur. Volutpat consequat mauris nunc congue nisi vitae. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Netus et malesuada fames ac turpis. Arcu vitae elementum curabitur vitae nunc sed. Pharetra pharetra massa massa ultricies mi. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Interdum varius sit amet mattis. Risus commodo viverra maecenas accumsan lacus vel. Dui sapien eget mi proin sed libero enim sed faucibus. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Morbi tristique senectus et netus et malesuada. Volutpat diam ut venenatis tellus. Nec ultrices dui sapien eget mi. Lobortis mattis aliquam faucibus purus in massa. </p>
   </div>
)

export default HomePage;

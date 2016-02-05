var React = require('react');
var p5 = require('p5');

module.exports = React.createClass({
  
  render: function() {
    return (
			<div style={{
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				zIndex: 0
			}}
			>
				<canvas/>
			</div>
    );
  },

  componentDidMount: function() {
		
		var cont = this.getDOMNode();	
	  var canvas = cont.querySelector('canvas');
		canvas.width = cont.offsetWidth;
		canvas.height = cont.offsetHeight;
		var ctx = canvas.getContext('2d');
		var loop;

		function animate() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.beginPath();
			ctx.moveTo(Math.random() * canvas.width,
					Math.random() * canvas.width);
			ctx.lineTo(Math.random() * canvas.height,
					Math.random() * canvas.height);
			ctx.lineTo(Math.random() * canvas.height,
					Math.random() * canvas.height);
			ctx.closePath();
			ctx.stroke();

			loop = requestAnimationFrame(animate);
		}	

		//animate();
  }
			
});

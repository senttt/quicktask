import logo from './logo.svg';
import './TaskTracker.css';

function TaskTracker() {
  return (
    <div>
  <div>
    <div class="sidebar">
      <div class="logo">
      </div>
      <ul class="nav-links">
        <li><a href="#">User Accounts</a></li>
        <li><a href="#">Task Management</a></li>
        <li class="active"><a href="#">Task Tracker</a></li>
        <li><a href="#">Data Analysis</a></li>
        <li><a href="#">Dashboard</a></li>
      </ul>
      <div class="user-info">
        <span class="username">John Doe</span>
        <span class="sign-out"><a href="#">X</a></span>
      </div>
    </div>
	<div class="main">
		<header>
			<h1>TaskTracker</h1>
		</header>
		<center>
			<div class="report-chart">
				<div class="chart-container">
					<div class="chart-area">
					</div>
				</div>
			</div>
		</center>
        <header1>
            <div class="yellow-panel">
                    <h2>-- Current Task --</h2>
                    <div class="progress-list">
                        
                    </div>
            </div>
        </header1>
	</div>
    <script src="script.js"></script>
  </div>
    </div>
  );
}

export default TaskTracker;

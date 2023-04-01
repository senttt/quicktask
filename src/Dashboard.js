import logo from './logo.svg';
import './Dashboard.css';

function Dashboard() {
  return (
    <div>
  <div>
    <div class="sidebar">
      <div class="logo">
      </div>
      <ul class="nav-links">
        <li><a href="#">User Accounts</a></li>
        <li><a href="#">Task Management</a></li>
        <li><a href="#">Task Tracker</a></li>
        <li><a href="#">Data Analysis</a></li>
        <li class="active"><a href="#">Dashboard</a></li>
      </ul>
      <div class="user-info">
        <span class="username">John Doe</span>
        <span class="sign-out"><a href="#">X</a></span>
      </div>
    </div>
    <div class="main">
        <header1>
            <h1>Dashboard</h1>
        </header1>
        <header2>
            <h1>This Day's Tasks</h1>
        </header2>
        <div class="dashboard-container">
            <div class="yellow-panel">
                <h2>Pending Tasks</h2>
                <div class="task-list">
                    <!-- add task panels here -->
                </div>
            </div>
            <div class="yellow-panel">
                <h2>Current Progress</h2>
                <div class="progress-list">
                    <!-- add progress panels here -->
                </div>
            </div>
            <div class="green-panel">
                <h2>Tasks Due Today</h2>
                <div class="task-list">
                        <!-- add task panels here -->
                </div>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
  </div>
    </div>
  );
}

export default Dashboard;

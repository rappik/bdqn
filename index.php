<?php
$activeTab = isset($_GET['tab']) ? $_GET['tab'] : 'looker';
$urls = [
    'powerbi' => "https://app.powerbi.com/view?r=eyJrIjoiYmQ4ZmQ2MTYtNmUxMC00Y2U1LWEzZWQtMjAzZWY3N2IzZTBjIiwidCI6IjRkNmQ2N2FlLTViNTUtNDJhYy05ZGFhLTkzOTk3Yzc3YTg3YSIsImMiOjEwfQ%3D%3D",
    'looker' => "https://lookerstudio.google.com/embed/reporting/458d28c2-14a1-4c51-8fb9-2189133b8825/page/aQHaE"
];
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard BDQN</title>
    <link rel="icon" href="logo.png" type="image/png">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: system-ui, -apple-system, sans-serif;
            background: #f8fafc;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            background: linear-gradient(135deg, #2563eb, #4267ce);
            color: white;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .title {
            font-size: 1.5rem;
            font-weight: 600;
        }

        .tabs {
            display: flex;
            gap: 1rem;
        }

        .tab {
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            cursor: pointer;
            font-size: 1rem;
            transition: all 0.3s ease;
            text-decoration: none;
        }

        .tab:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
        }

        .tab.active {
            background: rgba(255, 255, 255, 0.25);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .dashboard-container {
            width: 98%;
            max-width: 1400px;
            height: calc(100vh - 120px);
            margin: 0.5rem auto;
            background: white;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
            border-radius: 16px;
            overflow: hidden;
            position: relative;
            border: 1px solid rgba(255, 255, 255, 0.1);
            flex-grow: 1;
        }

        .dashboard-iframe {
            width: 100%;
            height: 100%;
            border: none;
            display: block;
        }

        @media (max-width: 768px) {
            .header {
                flex-direction: column;
                padding: 1rem;
                gap: 1rem;
            }

            .title {
                font-size: 1.2rem;
                text-align: center;
            }

            .tab {
                padding: 0.5rem 1rem;
                font-size: 0.9rem;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <h1 class="title">Dashboard Khách hàng mới Bưu điện Quảng Nam</h1>
        <nav class="tabs">
            <a href="?tab=powerbi" class="tab <?php echo $activeTab === 'powerbi' ? 'active' : ''; ?>">
                PowerBI
            </a>
            <a href="?tab=looker" class="tab <?php echo $activeTab === 'looker' ? 'active' : ''; ?>">
                Looker
            </a>
        </nav>
    </header>

    <main class="dashboard-container">
        <iframe 
            class="dashboard-iframe"
            src="<?php echo $urls[$activeTab]; ?>"
            frameborder="0"
            allowfullscreen
            <?php if ($activeTab === 'looker'): ?>
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            <?php endif; ?>
        ></iframe>
    </main>

    <script>
        // Thêm animation khi chuyển tab
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', function(e) {
                const currentTab = document.querySelector('.tab.active');
                if (currentTab) {
                    currentTab.classList.remove('active');
                }
                this.classList.add('active');
            });
        });
    </script>
</body>
</html> 
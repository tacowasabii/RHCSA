import type { Problem } from '../types';

export const problems: Problem[] = [
  {
    id: 'network-config-1',
    category: 'Server A',
    title: 'Configure Network Settings',
    titleKo: '네트워크 설정 구성',
    description: 'Configure the network details on servera as follows:',
    descriptionKo: 'servera의 네트워크 설정을 다음과 같이 구성하시오:',
    scenarios: [
      'Hostname : servera.lab.example.com',
      'IP Address : 192.168.1.10',
      'Netmask : 255.255.255.0',
      'Gateway : 192.168.1.1',
      'Nameserver: 192.168.1.1'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Set the hostname to servera.lab.example.com',
        instructionKo: '호스트네임을 servera.lab.example.com으로 설정하시오.',
        command: 'hostnamectl set-hostname servera.lab.example.com'
      },
      {
        id: 2,
        instruction: 'Verify the hostname change',
        instructionKo: '호스트네임 변경을 확인하시오.',
        command: 'hostnamectl'
      },
      {
        id: 3,
        instruction: 'Set the IP, Gateway, and Nameserver for "Wired connection 1"',
        instructionKo: '"Wired connection 1"의 IP, 게이트웨이, 네임서버를 설정하시오.',
        command: 'nmcli connection modify "Wired connection 1" ipv4.addresses 192.168.1.10/24 ipv4.gateway 192.168.1.1 ipv4.dns 192.168.1.1 ipv4.method manual'
      },
      {
        id: 4,
        instruction: 'Bring up the connection to apply changes',
        instructionKo: '변경 사항을 적용하기 위해 연결을 활성화하시오.',
        command: 'nmcli connection up "Wired connection 1"'
      },
      {
        id: 5,
        instruction: 'Test connectivity to the gateway',
        instructionKo: '게이트웨이와의 연결을 테스트하시오.',
        command: 'ping 192.168.1.1'
      }
    ]
  },
  {
    id: 'user-group-management',
    category: 'Server A',
    title: 'Create Users and Groups',
    titleKo: '사용자 및 그룹 생성',
    description: `# Question 1: You are the adminstrator of devops-wala company and you need to perform below tasks on \`servera\`

- Create a two groups called \`admin\` and \`devops-wala\`
- Creata a users
    - \`punit\` users must be the part of \`admin\` group. Or you can say that Add \`admin\` group as a seconday group of these users.
    - User \`punit\` should have \`1234\` UID and Add the comment \`For OCP Cluster\`
    - User \`punit\` should have home directory \`/home/ocp-cluster/\`.
    - User \`punit\` should have login shell \`/bin/bash\`
    - User \`rajan\` shoudl have \`1235\` UID and Add the comment \`For Database Cluster\`
    - User \`rajan\` shoudl have home directory \`/home/database-cluster\`
    - User \`rajan\` should have login shell \`/bin/sh\`
    - \`harry\` users must be the part of \`devops-wala\` group. Or you can say that Add \`devops-wala\` group as a seconday group of these users.
    - User \`harry\` should have \`1334\` UID and Add the comment \`For OCP Cluster\`
    - User \`harry\` should have home directory \`/home/harry/\`.
    - User \`harry\` should have login shell \`/bin/bash\`
    - User \`peter\` shoudl have \`1335\` UID and Add the comment \`For Database Cluster\`
    - User \`peter\` shoudl have home directory \`/home/peter\`
    - User \`peter\` should have login shell \`/bin/sh\`
- Create a user \`mon_ocp\` and this user should have non=interactive shell and it should not the part of \`devops-wala\` and \`admin\` groups
- All users must have password \`devops-wala\`.`,
    descriptionKo: '제시된 요구사항에 따라 admin, devops-wala 그룹을 생성하고 punit, rajan, harry, peter, mon_ocp 사용자를 설정하시오.',
    scenarios: [
      'Groups: admin, devops-wala',
      'User punit: G: admin, U: 1234, C: "For OCP Cluster", D: /home/ocp-cluster, S: /bin/bash',
      'User rajan: U: 1235, C: "For Database Cluster", D: /home/database-cluster, S: /bin/sh',
      'User harry: G: devops-wala, U: 1334, C: "For OCP Cluster", D: /home/harry, S: /bin/bash',
      'User peter: G: devops-wala, U: 1335, C: "For Database Cluster", D: /home/peter, S: /bin/sh',
      'User mon_ocp: nologin shell, no groups',
      'Password for all: devops-wala'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Create admin group',
        instructionKo: 'admin 그룹을 생성하시오.',
        command: 'groupadd admin'
      },
      {
        id: 2,
        instruction: 'Create devops-wala group',
        instructionKo: 'devops-wala 그룹을 생성하시오.',
        command: 'groupadd devops-wala'
      },
      {
        id: 3,
        instruction: 'Create user punit',
        instructionKo: '요구사항에 맞춰 punit 사용자를 생성하시오.',
        command: 'useradd -G admin -u 1234 -s /bin/bash -d /home/ocp-cluster -c "For OCP Cluster" punit'
      },
      {
        id: 4,
        instruction: 'Create user rajan',
        instructionKo: '요구사항에 맞춰 rajan 사용자를 생성하시오.',
        command: 'useradd -u 1235 -s /bin/sh -d /home/database-cluster -c "For Database Cluster" rajan'
      },
      {
        id: 5,
        instruction: 'Create user harry',
        instructionKo: '요구사항에 맞춰 harry 사용자를 생성하시오.',
        command: 'useradd -G devops-wala -u 1334 -d /home/harry -s /bin/bash -c "For OCP Cluster" harry'
      },
      {
        id: 6,
        instruction: 'Create user peter',
        instructionKo: '요구사항에 맞춰 peter 사용자를 생성하시오.',
        command: 'useradd -G devops-wala -u 1335 -d /home/peter -s /bin/sh -c "For Database Cluster" peter'
      },
      {
        id: 7,
        instruction: 'Create user mon_ocp with non-interactive shell',
        instructionKo: '비대화형 쉘을 가진 mon_ocp 사용자를 생성하시오.',
        command: 'useradd -s /usr/sbin/nologin mon_ocp'
      },
      {
        id: 8,
        instruction: 'Set password for punit',
        instructionKo: 'punit 사용자의 비밀번호를 설정하시오.',
        command: 'echo "devops-wala" | passwd --stdin punit'
      },
      {
        id: 9,
        instruction: 'Set password for rajan',
        instructionKo: 'rajan 사용자의 비밀번호를 설정하시오.',
        command: 'echo "devops-wala" | passwd --stdin rajan'
      },
      {
        id: 10,
        instruction: 'Set password for harry',
        instructionKo: 'harry 사용자의 비밀번호를 설정하시오.',
        command: 'echo "devops-wala" | passwd --stdin harry'
      },
      {
        id: 11,
        instruction: 'Set password for peter',
        instructionKo: 'peter 사용자의 비밀번호를 설정하시오.',
        command: 'echo "devops-wala" | passwd --stdin peter'
      },
      {
        id: 12,
        instruction: 'Set password for mon_ocp',
        instructionKo: 'mon_ocp 사용자의 비밀번호를 설정하시오.',
        command: 'echo "devops-wala" | passwd --stdin mon_ocp'
      }
    ]
  },
  {
    id: 'password-policy',
    category: 'Server A',
    title: 'Set Switch Password Expiration',
    titleKo: '패스워드 만료 정책 설정',
    description: 'Configure password expiration policy to 17 days on servera.',
    descriptionKo: 'servera의 패스워드 만료 기간을 17일로 설정하시오.',
    scenarios: [
      'File: /etc/login.defs',
      'Parameter: PASS_MAX_DAYS',
      'Value: 17'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Open /etc/login.defs to modify password policy',
        instructionKo: '/etc/login.defs 파일을 열어 패스워드 정책을 수정하시오.',
        command: 'vi /etc/login.defs'
      },
      {
        id: 2,
        instruction: 'Verify PASS_MAX_DAYS is set to 17',
        instructionKo: 'PASS_MAX_DAYS가 17로 설정되었는지 확인하시오.',
        command: 'cat /etc/login.defs | grep "PASS_MAX_DAYS"'
      }
    ]
  },
  {
    id: 'httpd-installation',
    category: 'Server A',
    title: 'Install and Configure httpd',
    titleKo: 'httpd 패키지 설치 및 구성',
    description: `## You are the admin of \`devops-wala\` company and you need to install the \`httpd\` package on \`servera\`.
## You can use the below URLs:  \`http://content.example.com/rhel10.0/x86_64/dvd/BaseOS\` & \`http://content.example.com/rhel10.0/x86_64/dvd/AppStream\``,
    descriptionKo: '제시된 URL들을 사용하여 Yum 저장소를 설정하고 httpd 패키지를 설치하시오.',
    scenarios: [
      'BaseOS: http://content.example.com/rhel10.0/x86_64/dvd/BaseOS',
      'AppStream: http://content.example.com/rhel10.0/x86_64/dvd/AppStream',
      'Repo File: /etc/yum.repos.d/question12.repo',
      'Package: httpd'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Check for existing YUM repositories',
        instructionKo: '기존 YUM 저장소 설정을 확인하시오.',
        command: 'ls -ltr /etc/yum.repos.d/'
      },
      {
        id: 2,
        instruction: 'Create the repository configuration file (/etc/yum.repos.d/question12.repo) with the BaseOS and AppStream settings',
        instructionKo: '리포지토리 설정 파일(/etc/yum.repos.d/question12.repo)을 요구사항에 맞춰 작성하시오.',
        isMultiLine: true,
        command: `[BaseOs]
name = BaseOs
baseurl = http://content.example.com/rhel10.0/x86_64/dvd/BaseOS
enabled = true
gpgcheck = false

[APPs]
name = Apps
baseurl = http://content.example.com/rhel10.0/x86_64/dvd/AppStream
enabled = true
gpgcheck = false`
      },
      {
        id: 3,
        instruction: 'Install the httpd package',
        instructionKo: 'httpd 패키지를 설치하시오.',
        command: 'dnf install httpd -y'
      }
    ]
  },
  {
    id: 'httpd-troubleshooting-port85',
    category: 'Server A',
    title: 'Troubleshoot httpd Service',
    titleKo: 'httpd 서비스 트러블슈팅 (포트 85)',
    description: `## Question: One web server is running on port \`85\` and it is not working properly. You need to diagnose the issue and resolve it.`,
    descriptionKo: '포트 85에서 실행 중인 웹 서버의 문제를 진단하고 해결하시오. (서비스 시작, SELinux, 방화벽 설정 포함)',
    scenarios: [
      'Service: httpd',
      'Port: 85/tcp',
      'Config: /etc/httpd/conf/httpd.conf (Listen 85)'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Start the httpd service',
        instructionKo: 'httpd 서비스를 시작하시오.',
        command: 'systemctl start httpd.service'
      },
      {
        id: 2,
        instruction: 'Enable the httpd service to start on boot',
        instructionKo: '시스템 부팅 시 httpd 서비스가 자동 시작되도록 설정하시오.',
        command: 'systemctl enable httpd.service'
      },
      {
        id: 3,
        instruction: 'Check if port 85 is allowed in SELinux',
        instructionKo: 'SELinux에서 포트 85가 허용되어 있는지 확인하시오.',
        command: 'semanage port -l | grep http'
      },
      {
        id: 4,
        instruction: 'Add port 85 to SELinux http_port_t',
        instructionKo: 'SELinux http_port_t에 포트 85를 추가하시오.',
        command: 'semanage port -a -t http_port_t -p tcp 85'
      },
      {
        id: 5,
        instruction: 'Verify the port was added to SELinux',
        instructionKo: 'SELinux에 포트가 올바르게 추가되었는지 다시 확인하시오.',
        command: 'semanage port -l | grep http'
      },
      {
        id: 6,
        instruction: 'Add port 85/tcp to the firewall permanently',
        instructionKo: '방화벽에 포트 85/tcp를 영구적으로 추가하시오.',
        command: 'firewall-cmd --permanent --add-port=85/tcp'
      },
      {
        id: 7,
        instruction: 'Reload the firewall to apply changes',
        instructionKo: '변경 사항을 적용하기 위해 방화벽을 리로드하시오.',
        command: 'firewall-cmd --reload'
      },
      {
        id: 8,
        instruction: 'Verify the port is allowed in the firewall',
        instructionKo: '방화벽 설정에 포트가 추가되었는지 확인하시오.',
        command: 'firewall-cmd --list-all'
      }
    ]
  },
  {
    id: 'cron-job-config',
    category: 'Server A',
    title: 'Configure Cron Job',
    titleKo: '크론탭(Cron Job) 설정',
    description: `### Question:
- Create a user named \`punit1\`
- User with UID \`1238\`
- Users must have password \`devops-wala\`
- User \`punit1\` create a cronjob with \`logger "Devops-wala Youtube channel"\` and it must execute every 8 minutes.`,
    descriptionKo: 'UID 1238을 가진 punit1 사용자를 생성하고, 해당 사용자로 8분마다 실행되는 크론탭을 설정하시오.',
    scenarios: [
      'User: punit1',
      'UID: 1238',
      'Password: devops-wala',
      'Cron: logger "Devops-wala Youtube channel" (every 8 minutes)'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Create user punit1 with UID 1238',
        instructionKo: 'UID 1238을 가진 punit1 사용자를 생성하시오.',
        command: 'useradd -u 1238 punit1'
      },
      {
        id: 2,
        instruction: 'Set password for punit1',
        instructionKo: 'punit1 사용자의 비밀번호를 설정하시오.',
        command: 'echo "devops-wala" | passwd --stdin punit1'
      },
      {
        id: 3,
        instruction: 'Open the crontab editor for user punit1',
        instructionKo: 'punit1 사용자의 크론탭 에디터를 여시오.',
        command: 'crontab -eu punit1'
      },
      {
        id: 4,
        instruction: 'Configure crontab for user punit1 (entering only the cron entry line)',
        instructionKo: 'punit1 사용자의 크론탭 항목을 작성하시오. (한 줄만 입력)',
        isMultiLine: true,
        command: '*/8 * * * * logger "Devops-wala Youtube channel"'
      },
      {
        id: 5,
        instruction: 'Verify crontab for user punit1',
        instructionKo: 'punit1 사용자의 크론탭 항목이 올바르게 설정되었는지 확인하시오.',
        command: 'crontab -lu punit1'
      }
    ]
  },
  {
    id: 'find-command-basics',
    category: 'Server A',
    title: 'Find Command Basics',
    titleKo: 'find 명령어 기초',
    description: `## Question 1. Locate all the files with name \`devops.txt\` in the \`/home/student\` directory.

## Question 2. Locate all the files with name \`devops.txt\` in the \`/home/student\` directory and save in the \`/data/question2.txt\`

## Question 3. Locate all the files with name \`devops.txt\` in the \`/home/student\` directory but owned by user \`punit\` and copy it under \`/data/question3-files\`.

## Question 4. Locate all the files which are owned by user \`punit\` and copy it under \`/data/question4-files/flower\`.`,
    descriptionKo: '/home/student 디렉토리 내에서 파일을 검색하고 결과를 처리하는 다양한 find 명령어를 연습하시오.',
    scenarios: [
      'Target Directory: /home/student',
      'Filename: devops.txt',
      'Owner: punit',
      'Output/Copy Paths: /data/question2.txt, /data/question3-files, /data/question4-files/flower'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Locate all files with name "devops.txt" in /home/student',
        instructionKo: '/home/student 디렉토리에서 이름이 "devops.txt"인 모든 파일을 찾으시오.',
        command: 'find /home/student -name devops.txt'
      },
      {
        id: 2,
        instruction: 'Locate "devops.txt" in /home/student and save the list to /data/question2.txt',
        instructionKo: '/home/student에서 "devops.txt" 파일을 찾아 그 목록을 /data/question2.txt에 저장하시오.',
        command: 'find /home/student -name devops.txt > /data/question2.txt'
      },
      {
        id: 3,
        instruction: 'Locate "devops.txt" in /home/student owned by "punit" and copy to /data/question3-files',
        instructionKo: '/home/student에서 "punit" 소유의 "devops.txt"를 찾아 /data/question3-files로 복사하시오.',
        command: 'find /home/student -name devops.txt -user punit -exec cp -pv {} /data/question3-files/ \\;'
      },
      {
        id: 4,
        instruction: 'Create directory /data/question4-files/flower',
        instructionKo: '/data/question4-files/flower 디렉토리를 생성하시오.',
        command: 'mkdir -p /data/question4-files/flower'
      },
      {
        id: 5,
        instruction: 'Locate all files owned by "punit" and copy to /data/question4-files/flower',
        instructionKo: '"punit" 소유의 모든 파일을 찾아 /data/question4-files/flower 디렉토리로 복사하시오.',
        command: 'find / -user punit -exec cp -rvf {} /data/question4-files/flower/ \\;'
      },
      {
        id: 6,
        instruction: 'Verify the copied files',
        instructionKo: '복사된 파일들을 확인하시오.',
        command: 'ls -latr /data/question4-files/flower/'
      }
    ]
  },
  {
    id: 'find-command-scripting',
    category: 'Server A',
    title: 'Find Command Scripting',
    titleKo: 'find 명령어 스크립트 작성',
    description: `## Question 5. Create a script named \`question5-find.sh\` under \`/usr/local/bin\` directory and this script must locate all the regular files which are less than \`1M\` under \`/usr/share\` directory and save the searched file paths under \`/root/question5-find-output.txt\` file.

## Question 6. Create a script named \`question6-find.sh\` under \`/usr/local/bin\` directory and this script must locate all the regular files which are less than \`900k\` and more than \`30K\` under \`/var\` directory and these files must set SUID permission. You need to save the searched file paths under \`/root/question6-find-output\`.`,
    descriptionKo: '특정 조건의 파일을 찾아 결과를 파일로 저장하는 쉘 스크립트를 작성하고 권한을 설정하는 연습을 하시오.',
    scenarios: [
      'Scripts: /usr/local/bin/question5-find.sh, /usr/local/bin/question6-find.sh',
      'Filters: Size (-1M, +30k, -900k), Type (f), Permissions (SUID)',
      'Output: /root/question5-find-output.txt, /root/question6-find-output'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Create the script for Question 5 (/usr/local/bin/question5-find.sh)',
        instructionKo: '/usr/local/bin/question5-find.sh 스크립트를 작성하시오.',
        isMultiLine: true,
        command: 'find /usr/share/ -type f -size -1M > /root/question5-find-output.txt'
      },
      {
        id: 2,
        instruction: 'Give execute permission to question5-find.sh',
        instructionKo: 'question5-find.sh 파일에 실행 권한을 부여하시오.',
        command: 'chmod +x /usr/local/bin/question5-find.sh'
      },
      {
        id: 3,
        instruction: 'Execute the script question5-find.sh',
        instructionKo: '스크립트를 실행하시오.',
        command: 'question5-find.sh'
      },
      {
        id: 4,
        instruction: 'Verify Question 5 output',
        instructionKo: '생성된 결과 파일을 확인하시오.',
        command: 'cat /root/question5-find-output.txt'
      },
      {
        id: 5,
        instruction: 'Create directory for Question 6 output',
        instructionKo: 'Question 6 결과 저장을 위한 디스크토리를 생성하시오.',
        command: 'mkdir -p /root/question6-find-output'
      },
      {
        id: 6,
        instruction: 'Create the script for Question 6 (/usr/local/bin/question6-find.sh)',
        instructionKo: '/usr/local/bin/question6-find.sh 스크립트를 작성하시오.',
        isMultiLine: true,
        command: 'find /var -type f -size +30k -size -900k -perm -u+s > /root/question6-find-output'
      },
      {
        id: 7,
        instruction: 'Give execute permission to question6-find.sh',
        instructionKo: 'question6-find.sh 파일에 실행 권한을 부여하시오.',
        command: 'chmod +x /usr/local/bin/question6-find.sh'
      },
      {
        id: 8,
        instruction: 'Execute the script question6-find.sh',
        instructionKo: '스크립트를 실행하시오.',
        command: 'question6-find.sh'
      },
      {
        id: 9,
        instruction: 'Verify Question 6 output',
        instructionKo: '스크립트 실행 결과를 확인하시오.',
        command: 'cat /root/question6-find-output'
      }
    ]
  },
  {
    id: 'grep-command-basics',
    category: 'Server A',
    title: 'Grep Command Basics',
    titleKo: 'grep 명령어 기초',
    description: `## Question 1: Find the string \`err\` from \`/var/log/messages\` file and save the output in the \`/root/err.log\` file.

## Question 2: Find all lines that do NOT contain the string \`warning\` in \`/var/log/messages\`.

## Question 3: Find the string \`err\` case-insensitively (e.g., \`err\`, \`ERR\`, \`Err\`) from \`/var/log/messages\` and save in \`/root/err.log\`.

## Question 4: Find the string \`err\` along with line number from \`/var/log/messages\` and save in \`/root/err.log\`.`,
    descriptionKo: '/var/log/messages 파일에서 특정 문자열을 검색하고 결과를 처리하는 다양한 grep 명령어를 연습하시오.',
    scenarios: [
      'File to search: /var/log/messages',
      'Target string: err',
      'Output path: /root/err.log'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Find "err" in /var/log/messages and save to /root/err.log',
        instructionKo: '/var/log/messages에서 "err"를 찾아 /root/err.log에 저장하시오.',
        command: 'grep "err" /var/log/messages > /root/err.log'
      },
      {
        id: 2,
        instruction: 'Find lines NOT containing "warning" in /var/log/messages',
        instructionKo: '/var/log/messages에서 "warning"이 포함되지 않은 행들을 찾으시오.',
        command: 'grep -v "warning" /var/log/messages'
      },
      {
        id: 3,
        instruction: 'Find "err" case-insensitively in /var/log/messages and save to /root/err.log',
        instructionKo: '/var/log/messages에서 대소문자 구분 없이 "err"를 찾아 /root/err.log에 저장하시오.',
        command: 'grep -i "err" /var/log/messages > /root/err.log'
      },
      {
        id: 4,
        instruction: 'Find "err" with line numbers in /var/log/messages and save to /root/err.log',
        instructionKo: '/var/log/messages에서 행 번호와 함께 "err"를 찾아 /root/err.log에 저장하시오.',
        command: 'grep -n "err" /var/log/messages > /root/err.log'
      },
      {
        id: 5,
        instruction: 'Verify the output file',
        instructionKo: '생성된 결과 파일을 확인하시오.',
        command: 'cat /root/err.log'
      }
    ]
  },
  {
    id: 'autofs-configuration',
    category: 'Server A',
    title: 'Configure AutoFS',
    titleKo: 'AutoFS 설정',
    description: `## Task: Configure AutoFS on \`servera\` to automatically mount the home directory for \`production5\`.

- Install the necessary package for AutoFS.
- Ensure the service is enabled and started.
- Configure the master map file \`/etc/auto.master\` to manage \`/home/guest\` using \`/etc/auto.misc\`.
- Configure the indirect map file \`/etc/auto.misc\` to mount \`production5\` from \`serverb.lab.example.com:/user-homes/production5\`.
- The mount should use NFS with options \`rw,sync\`.`,
    descriptionKo: 'servera에서 AutoFS를 구성하여 production5 사용자의 홈 디렉토리를 자동으로 마운트하도록 설정하시오.',
    scenarios: [
      'Master Map: /etc/auto.master',
      'Indirect Map: /etc/auto.misc',
      'Mount Point: /home/guest/production5',
      'Remote: serverb.lab.example.com:/user-homes/production5',
      'Options: fstype=nfs,rw,sync'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Install the autofs package',
        instructionKo: 'autofs 패키지를 설치하시오.',
        command: 'dnf install autofs -y'
      },
      {
        id: 2,
        instruction: 'Enable and start autofs.service',
        instructionKo: 'autofs 서비스를 활성화하고 시작하시오.',
        command: 'systemctl enable --now autofs.service'
      },
      {
        id: 3,
        instruction: 'Open the master map file with vi',
        instructionKo: '/etc/auto.master 파일을 vi 에디터로 여시오.',
        command: 'vi /etc/auto.master'
      },
      {
        id: 4,
        instruction: 'Configure /etc/auto.master to manage /home/guest',
        instructionKo: '/home/guest 디렉토리 관리를 위해 /etc/auto.master 파일을 수정하시오.',
        isMultiLine: true,
        command: '/home/guest /etc/auto.misc'
      },
      {
        id: 5,
        instruction: 'Open the indirect map file with vi',
        instructionKo: '/etc/auto.misc 파일을 vi 에디터로 여시오.',
        command: 'vi /etc/auto.misc'
      },
      {
        id: 6,
        instruction: 'Configure /etc/auto.misc for the production5 mount',
        instructionKo: 'production5 마운트 설정을 위해 /etc/auto.misc 파일을 수정하시오.',
        isMultiLine: true,
        command: 'production5 -fstype=nfs,rw,sync serverb.lab.example.com:/user-homes/production5'
      },
      {
        id: 7,
        instruction: 'Restart autofs.service to apply changes',
        instructionKo: '변경 사항을 적용하기 위해 autofs 서비스를 재시작하시오.',
        command: 'systemctl restart autofs.service'
      },
      {
        id: 8,
        instruction: 'Verify access to the mounted directory',
        instructionKo: '마운트된 디렉토리에 접근하여 설정을 확인하시오.',
        command: 'ls -ltr /home/guest/production5'
      }
    ]
  },
  {
    id: 'ntp-configuration',
    category: 'Server A',
    title: 'Configure NTP Sync',
    titleKo: 'NTP 시간 동기화 설정',
    description: `## Task: You need to sync \`servera\` with ntp \`classroom.example.com\`

- Use the \`chronyd\` service to manage time synchronization.
- Configure the system clock to use NTP.
- Add \`server classroom.example.com iburst\` to the configuration and ensure other external servers are commented out.
- Ensure the service is restarted and enabled.`,
    descriptionKo: 'servera를 classroom.example.com NTP 서버와 동기화하도록 설정하시오.',
    scenarios: [
      'NTP Server: classroom.example.com',
      'Service: chronyd.service',
      'Config File: /etc/chrony.conf',
      'Reference: iburst option'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Check the status of NTP service (chronyd)',
        instructionKo: 'chronyd 서비스의 상태를 확인하시오.',
        command: 'systemctl status chronyd.service'
      },
      {
        id: 2,
        instruction: 'Set the system clock to use NTP',
        instructionKo: '시스템 시계가 NTP를 사용하도록 설정하시오.',
        command: 'timedatectl set-ntp true'
      },
      {
        id: 3,
        instruction: 'Open /etc/chrony.conf with vi',
        instructionKo: '/etc/chrony.conf 파일을 vi 에디터로 여시오.',
        command: 'vi /etc/chrony.conf'
      },
      {
        id: 4,
        instruction: 'Update the ntp server in /etc/chrony.conf (Comment out 172.25.254.254 and add classroom.example.com)',
        instructionKo: '/etc/chrony.conf 파일에서 기존 서버를 주석 처리하고 classroom.example.com을 추가하시오.',
        isMultiLine: true,
        initialValue: `#server 0.rhel.pool.ntp.org iburst
#server 1.rhel.pool.ntp.org iburst
#server 2.rhel.pool.ntp.org iburst
#server 3.rhel.pool.ntp.org iburst
server 172.25.254.254 iburst

# Ignore stratum in source selection.
stratumweight 0`,
        command: `#server 0.rhel.pool.ntp.org iburst
#server 1.rhel.pool.ntp.org iburst
#server 2.rhel.pool.ntp.org iburst
#server 3.rhel.pool.ntp.org iburst
#server 172.25.254.254 iburst
server classroom.example.com iburst

# Ignore stratum in source selection.
stratumweight 0`
      },
      {
        id: 5,
        instruction: 'Restart the NTP service',
        instructionKo: 'chronyd 서비스를 재시작하시오.',
        command: 'systemctl restart chronyd.service'
      },
      {
        id: 6,
        instruction: 'Verify the NTP status and source',
        instructionKo: 'NTP 동기화 상태와 소스를 확인하시오.',
        command: 'systemctl status chronyd.service'
      },
      {
        id: 7,
        instruction: 'Enable the chronyd-restricted service',
        instructionKo: 'chronyd-restricted 서비스를 활성화(enable) 하시오.',
        command: 'systemctl enable chronyd-restricted.service'
      }
    ]
  },
  {
    id: 'podman-image-building',
    category: 'Server A',
    title: 'Podman: Build Image',
    titleKo: 'Podman: 이미지 빌드 실습',
    description: `## Task: Create an image named \`my_image:1.0\` from a remote YAML file.

- The URL for the definition file is: \`https://raw.githubusercontent.com/anishrana2001/Openshift/refs/heads/main/RHCSA-V.9.3/image_08-01.yaml\`
- You must login to the registry: \`registry.lab.example.com:5000\`
- Registry credentials: User: \`student\`, Password: \`redhat\``,
    descriptionKo: '원격 YAML 파일을 사용하여 my_image:1.0 이미지를 생성하고 레지스트리에 로그인하는 과정을 실습하시오.',
    scenarios: [
      'Registry: registry.lab.example.com:5000',
      'Image Name: my_image:1.0',
      'YAML URL: https://raw.githubusercontent.com/anishrana2001/.../image_08-01.yaml'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Login to the private registry',
        instructionKo: '프라이빗 레지스트리에 로그인하시오.',
        command: 'podman login registry.lab.example.com:5000'
      },
      {
        id: 2,
        instruction: 'Download the image definition file (YAML)',
        instructionKo: '이미지 정의 파일(YAML)을 다운로드하시오.',
        command: 'wget https://raw.githubusercontent.com/anishrana2001/Openshift/refs/heads/main/RHCSA-V.9.3/image_08-01.yaml'
      },
      {
        id: 3,
        instruction: 'Build the image using the downloaded file',
        instructionKo: '다운로드한 파일을 사용하여 이미지를 빌드하시오.',
        command: 'podman build -t my_image:1.0 -f image_08-01.yaml'
      },
      {
        id: 4,
        instruction: 'Verify the newly created image',
        instructionKo: '생성된 이미지를 확인하십시오.',
        command: 'podman images'
      }
    ]
  },
  {
    id: 'podman-container-basics',
    category: 'Server A',
    title: 'Podman: Container & Volumes',
    titleKo: 'Podman: 컨테이너 및 볼륨 설정',
    description: `## Task 1: Create a container named \`mywebserverpod1\`.
- Use the image \`my_image:1.0\` created previously.
- Identify the container's IP address and save it to \`/opt/container/question1.txt\`.

## Task 2: Create a container named \`mywebserverpod3\`.
- Use the image \`registry.lab.example.com:5000/rhel10/httpd-24\`.
- Mount \`/opt/dir11\` to \`/opt/audio1\` (Persistent).
- Mount \`/opt/dir22\` to \`/opt/video2\` (Persistent).`,
    descriptionKo: '컨테이너 생성, IP 확인, 그리고 다중 볼륨 마운트 설정을 실습하시오.',
    scenarios: [
      'Image 1: my_image:1.0',
      'Image 2: registry.lab.example.com:5000/rhel10/httpd-24',
      'IP Save Path: /opt/container/question1.txt',
      'Mounts: /opt/dir11 -> /opt/audio1, /opt/dir22 -> /opt/video2'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Run mywebserverpod1 container using my_image:1.0',
        instructionKo: 'my_image:1.0 이미지를 사용하여 mywebserverpod1 컨테이너를 실행하시오.',
        command: 'podman run -d --name mywebserverpod1 my_image:1.0'
      },
      {
        id: 2,
        instruction: 'Identify the IP address of mywebserverpod1',
        instructionKo: '컨테이너의 IP 주소를 확인하시오.',
        command: 'podman inspect mywebserverpod1 | grep IPAddress'
      },
      {
        id: 3,
        instruction: 'Save the IP address to /opt/container/question1.txt',
        instructionKo: '확인된 IP 주소를 /opt/container/question1.txt에 저장하시오.',
        command: 'echo "10.88.0.X" > /opt/container/question1.txt'
      },
      {
        id: 4,
        instruction: 'Run mywebserverpod3 with persistent volume mounts',
        instructionKo: '두 개의 볼륨 마운트를 포함하여 mywebserverpod3 컨테이너를 실행하시오.',
        command: 'podman run -d --name mywebserverpod3 -v /opt/dir11:/opt/audio1:Z -v /opt/dir22:/opt/video2:Z registry.lab.example.com:5000/rhel10/httpd-24'
      }
    ]
  },
  {
    id: 'podman-systemd-service',
    category: 'Server A',
    title: 'Podman: Rootless Systemd Service',
    titleKo: 'Podman: 루트리스 시스템드 서비스 설정',
    description: `## Task: Configure a rootless container as a system start-up service.

- Create directories \`/opt/dir10\` and \`/opt/dir20\` with owner \`student\`.
- Enable user lingering for \`student\`.
- Run a container named \`mycontainer12\` with volumes mounted to \`/opt/audio\` and \`/opt/video\`.
- Use image \`registry.lab.example.com:5000/rhel10/httpd-24\`.
- Generate and enable a systemd user service named \`mycontainer2.service\`.
- The container must restart automatically on reboot.`,
    descriptionKo: 'Rootless 컨테이너를 시스템 서비스로 등록하여 부팅 시 자동 실행되도록 설정하시오.',
    scenarios: [
      'User: student',
      'Lingering: loginctl enable-linger student',
      'Container Name: mycontainer12',
      'Mounts: /opt/dir10 -> /opt/audio, /opt/dir20 -> /opt/video',
      'Service Name: mycontainer2.service'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Create the host directories for volume mounting',
        instructionKo: '볼륨 마운트를 위한 호스트 디렉토리들을 생성하시오.',
        command: 'mkdir /opt/dir10 /opt/dir20'
      },
      {
        id: 2,
        instruction: 'Change ownership of the directories to the student user',
        instructionKo: '디렉토리의 소유권을 student 사용자로 변경하시오.',
        command: 'chown student:student /opt/dir10 /opt/dir20'
      },
      {
        id: 3,
        instruction: 'Set full permissions for the directories',
        instructionKo: '디렉토리에 모든 권한(777)을 부여하시오.',
        command: 'chmod 777 /opt/dir10 /opt/dir20'
      },
      {
        id: 4,
        instruction: 'Enable user lingering for student',
        instructionKo: 'student 사용자에 대해 lingering을 활성화하시오.',
        command: 'loginctl enable-linger student'
      },
      {
        id: 5,
        instruction: 'Login to the registry as the student user',
        instructionKo: 'student 사용자로 레지스트리에 로그인하시오.',
        command: 'podman login registry.lab.example.com:5000'
      },
      {
        id: 6,
        instruction: 'Run the container with persistent volumes',
        instructionKo: '영구 볼륨을 사용하여 컨테이너를 실행하시오.',
        command: 'podman run -d --name mycontainer12 -v /opt/dir10:/opt/audio:Z -v /opt/dir20:/opt/video:Z registry.lab.example.com:5000/rhel10/httpd-24'
      },
      {
        id: 7,
        instruction: 'Navigate to the systemd user configuration directory',
        instructionKo: '시스템드 사용자 설정 디렉토리로 이동하시오. (없을 시 생성)',
        command: 'mkdir -p ~/.config/systemd/user && cd ~/.config/systemd/user'
      },
      {
        id: 8,
        instruction: 'Generate the systemd service file from the container',
        instructionKo: '실행 중인 컨테이너를 기반으로 시스템드 서비스 파일을 생성하시오.',
        command: 'podman generate systemd --name mycontainer12 --new --files'
      },
      {
        id: 9,
        instruction: 'Reload the user systemd daemon',
        instructionKo: '사용자 시스템드 데몬을 재로드하시오.',
        command: 'systemctl --user daemon-reload'
      },
      {
        id: 10,
        instruction: 'Enable the container service',
        instructionKo: '컨테이너 서비스를 활성화(enable) 하시오.',
        command: 'systemctl --user enable container-mycontainer12.service'
      },
      {
        id: 11,
        instruction: 'Start the container service',
        instructionKo: '컨테이너 서비스를 시작(start) 하시오.',
        command: 'systemctl --user start container-mycontainer12.service'
      },
      {
        id: 12,
        instruction: 'Verify the service status',
        instructionKo: '서비스 상태를 최종 확인하시오.',
        command: 'systemctl --user status container-mycontainer12.service'
      }
    ]
  },
  {
    id: 'shared-directory-permissions',
    category: 'User & Group',
    title: 'Collaborative Shared Directory',
    titleKo: '공유 디렉토리 및 특수 권한(SGID) 설정',
    description: `## Task: Create a shared directory for the admin group.

- Create a shared directory named \`/home/shared-dir\`.
- Set the group owner of the directory to \`admin\`.
- Ensure members of the \`admin\` group have full rights (\`rwx\`).
- Ensure others have no rights at all (\`---\`).
- Configure the directory so that any new files created inside automatically inherit the \`admin\` group ownership.`,
    descriptionKo: 'admin 그룹을 위한 공유 디렉토리를 생성하고, 그룹 권한 및 SGID를 설정하시오.',
    scenarios: [
      'Directory: /home/shared-dir',
      'Group Owner: admin',
      'Permissions: group:rwx, other:---',
      'Inheritance: SGID bit (Set-Group-ID)'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Create the shared directory',
        instructionKo: '공유 디렉토리를 생성하시오.',
        command: 'mkdir /home/shared-dir'
      },
      {
        id: 2,
        instruction: 'Change the group ownership to admin',
        instructionKo: '디렉토리의 그룹 소유권을 admin으로 변경하시오.',
        command: 'chgrp admin /home/shared-dir'
      },
      {
        id: 3,
        instruction: 'Set group permissions to rwx and others to none',
        instructionKo: '그룹에는 rwx 권한을, 그 외 사용자에게는 아무 권한도 주지 마시오.',
        command: 'chmod 770 /home/shared-dir'
      },
      {
        id: 4,
        instruction: 'Set the SGID bit for group ownership inheritance',
        instructionKo: '파일 생성 시 그룹 소유권이 상속되도록 SGID를 설정하시오.',
        command: 'chmod g+s /home/shared-dir'
      },
      {
        id: 5,
        instruction: 'Verify directory permissions and SGID',
        instructionKo: '디렉토리의 권한과 SGID 설정을 확인하시오.',
        command: 'ls -ld /home/shared-dir'
      },
      {
        id: 6,
        instruction: 'Test inheritance by creating a file',
        instructionKo: '디렉토리 내에 파일을 생성하여 그룹 상속을 확인하시오.',
        command: 'touch /home/shared-dir/test.txt && ls -ltr /home/shared-dir/test.txt'
      }
    ]
  },
  {
    id: 'tar-archiving-basics',
    category: 'File Management',
    title: 'Tar Archiving & Compression',
    titleKo: 'Tar 아카이브 및 압축 실습',
    description: `## Task: Master the \`tar\` command for archiving and compression.

The \`tar\` (tape archive) command is essential for creating, listing, and extracting archives in Linux.

### Key Options:
- \`-c\`: Create an archive
- \`-x\`: Extract an archive
- \`-v\`: Verbose mode (show files being processed)
- \`-f\`: Specify the filename of the archive
- \`-z\`: Use \`gzip\` compression (\`.tar.gz\`)
- \`-j\`: Use \`bzip2\` compression (\`.tar.bz2\`)`,
    descriptionKo: 'Gzip 및 Bzip2 방식을 사용하여 아카이브 생성 및 해제하는 방법을 실습하시오.',
    scenarios: [
      'Gzip Archive: /root/test1.tar.gz',
      'Bzip2 Archive: /root/test2.tar.bz2',
      'Source: /var/log/ files'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Create a gzip compressed archive of /var/log/ in /root/test1.tar.gz',
        instructionKo: '/var/log/ 디렉토리를 gzip 방식으로 압축하여 /root/test1.tar.gz 아카이브를 생성하시오.',
        command: 'tar cvfz /root/test1.tar.gz /var/log/*'
      },
      {
        id: 2,
        instruction: 'Create a bzip2 compressed archive of /var/log/ in /root/test2.tar.bz2',
        instructionKo: '/var/log/ 디렉토리를 bzip2 방식으로 압축하여 /root/test2.tar.bz2 아카이브를 생성하시오.',
        command: 'tar cvfj /root/test2.tar.bz2 /var/log/*'
      },
      {
        id: 3,
        instruction: 'Extract the gzip archive /root/test1.tar.gz',
        instructionKo: '/root/test1.tar.gz 아카이브의 압축을 해제하시오.',
        command: 'tar zxvf /root/test1.tar.gz'
      },
      {
        id: 4,
        instruction: 'Extract the bzip2 archive /root/test2.tar.bz2',
        instructionKo: '/root/test2.tar.bz2 아카이브의 압축을 해제하시오.',
        command: 'tar jxvf /root/test2.tar.bz2'
      }
    ]
  }
];

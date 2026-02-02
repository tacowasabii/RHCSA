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
  }
];

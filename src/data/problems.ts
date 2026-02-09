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
      'Hostname: servera.lab.example.com',
      'IP Address: 192.168.1.10',
      'Netmask: 255.255.255.0',
      'Gateway: 192.168.1.1',
      'DNS: 192.168.1.1'
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
        instruction: 'List all network connections',
        instructionKo: '모든 네트워크 연결 정보를 조회하시오.',
        command: 'nmcli con show'
      },
      {
        id: 4,
        instruction: 'Configure IPv4 settings with autoconnect',
        instructionKo: 'autoconnect 및 IPv4 설정을 구성하시오.',
        command: 'nmcli con modify "Wired connection 1" autoconnect yes ipv4.method manual ipv4.addresses 192.168.1.10/24 ipv4.gateway 192.168.1.1 ipv4.dns 192.168.1.1'
      },
      {
        id: 5,
        instruction: 'Bring up the connection to apply changes',
        instructionKo: '변경 사항을 적용하기 위해 연결을 활성화하시오.',
        command: 'nmcli con up "Wired connection 1"'
      },
      {
        id: 6,
        instruction: 'Test connectivity to the gateway',
        instructionKo: '게이트웨이와의 연결을 테스트하시오.',
        command: 'ping 192.168.1.1'
      }
    ]
  },
  {
    id: 'network-config-2',
    category: 'Server A',
    title: 'Configure Network Settings (node1)',
    titleKo: '네트워크 설정 구성 (node1)',
    description: `## Configure the network settings on \`node1\` as follows:

- Set the hostname to \`node1.domain250.example.com\`.
- Configure the IPv4 address, subnet mask, gateway, and DNS.
- Ensure the connection is set to auto-connect.`,
    descriptionKo: `## node1의 네트워크 구성을 아래와 같이 변경하세요.

- 호스트네임을 \`node1.domain250.example.com\`으로 설정하세요.
- IPv4 주소, 서브넷 마스크, 게이트웨이, DNS를 설정하세요.
- 연결이 자동으로 활성화되도록 설정하세요.`,
    scenarios: [
      'Hostname: node1.domain250.example.com',
      'IP Address: 172.25.250.100',
      'Subnet Mask: 255.255.255.0',
      'Gateway: 172.25.250.254',
      'DNS: 172.25.250.254'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Set the hostname to node1.domain250.example.com',
        instructionKo: '호스트네임을 node1.domain250.example.com으로 설정하시오.',
        command: 'hostnamectl set-hostname node1.domain250.example.com'
      },
      {
        id: 2,
        instruction: 'List all network connections',
        instructionKo: '모든 네트워크 연결 정보를 조회하시오.',
        command: 'nmcli con show'
      },
      {
        id: 3,
        instruction: 'Configure IPv4 settings with autoconnect',
        instructionKo: 'autoconnect 및 IPv4 설정을 구성하시오.',
        command: 'nmcli con modify "Wired connection 1" autoconnect yes ipv4.method manual ipv4.addresses 172.25.250.100/24 ipv4.gateway 172.25.250.254 ipv4.dns 172.25.250.254'
      },
      {
        id: 4,
        instruction: 'Bring up the connection to apply changes',
        instructionKo: '변경 사항을 적용하기 위해 연결을 활성화하시오.',
        command: 'nmcli con up "Wired connection 1"'
      },
      {
        id: 5,
        instruction: 'Verify the network configuration',
        instructionKo: '네트워크 설정 변경 여부를 확인하시오.',
        command: 'ip a'
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
        command: 'useradd -G admin -u 1234 -c "For OCP Cluster" -d /home/ocp-cluster -s /bin/bash punit'
      },
      {
        id: 4,
        instruction: 'Create user rajan',
        instructionKo: '요구사항에 맞춰 rajan 사용자를 생성하시오.',
        command: 'useradd -u 1235 -c "For Database Cluster" -d /home/database-cluster -s /bin/sh rajan'
      },
      {
        id: 5,
        instruction: 'Create user harry',
        instructionKo: '요구사항에 맞춰 harry 사용자를 생성하시오.',
        command: 'useradd -G devops-wala -u 1334 -c "For OCP Cluster" -d /home/harry -s /bin/bash harry'
      },
      {
        id: 6,
        instruction: 'Create user peter',
        instructionKo: '요구사항에 맞춰 peter 사용자를 생성하시오.',
        command: 'useradd -G devops-wala -u 1335 -c "For Database Cluster" -d /home/peter -s /bin/sh peter'
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
        command: 'echo devops-wala | passwd --stdin punit'
      },
      {
        id: 9,
        instruction: 'Set password for rajan',
        instructionKo: 'rajan 사용자의 비밀번호를 설정하시오.',
        command: 'echo devops-wala | passwd --stdin rajan'
      },
      {
        id: 10,
        instruction: 'Set password for harry',
        instructionKo: 'harry 사용자의 비밀번호를 설정하시오.',
        command: 'echo devops-wala | passwd --stdin harry'
      },
      {
        id: 11,
        instruction: 'Set password for peter',
        instructionKo: 'peter 사용자의 비밀번호를 설정하시오.',
        command: 'echo devops-wala | passwd --stdin peter'
      },
      {
        id: 12,
        instruction: 'Set password for mon_ocp',
        instructionKo: 'mon_ocp 사용자의 비밀번호를 설정하시오.',
        command: 'echo devops-wala | passwd --stdin mon_ocp'
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
      'Parameter: PASS_MAX_DAYS',
      'Value: 17'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Open the file to modify password policy',
        instructionKo: '패스워드 정책을 수정할 파일을 여시오.',
        command: 'vim /etc/login.defs'
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
    id: 'user-account-management',
    category: 'Server A',
    title: 'User Account Management',
    titleKo: '사용자 계정 관리',
    description: `## Create users and groups as follows:

- Create a group called \`sysmgrs\`
- Create user \`natasha\` with \`sysmgrs\` as a secondary group
- Create user \`harry\` with \`sysmgrs\` as a secondary group
- Create user \`sarah\` who cannot access an interactive shell and is not a member of \`sysmgrs\`
- Set the password for \`natasha\`, \`harry\`, and \`sarah\` to \`flectrag\``,
    descriptionKo: `## 아래와 같이 사용자/그룹 생성을 하라.

- \`sysmgrs\`라는 그룹을 생성하세요.
- \`natasha\` 사용자를 생성하고, 보조 그룹으로 \`sysmgrs\`에 속하게 하세요.
- \`harry\` 사용자를 생성하고, 보조 그룹으로 \`sysmgrs\`에 속하게 하세요.
- \`sarah\` 사용자는 시스템에서 상호작용 shell에 접근할 수 없으며, \`sysmgrs\` 그룹의 구성원이 아닙니다.
- \`natasha\`, \`harry\`, \`sarah\`의 비밀번호는 모두 \`flectrag\`로 설정하세요.`,
    scenarios: [
      'Group: sysmgrs',
      'User natasha: secondary group sysmgrs',
      'User harry: secondary group sysmgrs',
      'User sarah: nologin shell, no group',
      'Password for all: flectrag'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Create the sysmgrs group',
        instructionKo: 'sysmgrs 그룹을 생성하시오.',
        command: 'groupadd sysmgrs'
      },
      {
        id: 2,
        instruction: 'Create user natasha with sysmgrs as secondary group',
        instructionKo: 'natasha 사용자를 생성하고 sysmgrs를 보조 그룹으로 설정하시오.',
        command: 'useradd -G sysmgrs natasha'
      },
      {
        id: 3,
        instruction: 'Create user harry with sysmgrs as secondary group',
        instructionKo: 'harry 사용자를 생성하고 sysmgrs를 보조 그룹으로 설정하시오.',
        command: 'useradd -G sysmgrs harry'
      },
      {
        id: 4,
        instruction: 'Create user sarah with non-interactive shell',
        instructionKo: 'sarah 사용자를 비대화형 쉘로 생성하시오.',
        command: 'useradd -s /usr/sbin/nologin sarah'
      },
      {
        id: 5,
        instruction: 'Set password for natasha',
        instructionKo: 'natasha 사용자의 비밀번호를 설정하시오.',
        command: 'echo flectrag | passwd --stdin natasha'
      },
      {
        id: 6,
        instruction: 'Set password for harry',
        instructionKo: 'harry 사용자의 비밀번호를 설정하시오.',
        command: 'echo flectrag | passwd --stdin harry'
      },
      {
        id: 7,
        instruction: 'Set password for sarah',
        instructionKo: 'sarah 사용자의 비밀번호를 설정하시오.',
        command: 'echo flectrag | passwd --stdin sarah'
      }
    ]
  },
  {
    id: 'user-creation-manalo',
    category: 'Server A',
    title: 'Create User with Specific UID',
    titleKo: '특정 UID로 사용자 생성',
    description: `## Create a user \`manalo\` with user ID 3533. The password is \`flectrag\`.`,
    descriptionKo: `## 사용자 ID가 3533인 사용자 \`manalo\`를 생성하라. 비밀번호는 \`flectrag\`.`,
    scenarios: [
      'User: manalo',
      'UID: 3533',
      'Password: flectrag'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Create user manalo with UID 3533',
        instructionKo: 'UID 3533을 가진 manalo 사용자를 생성하시오.',
        command: 'useradd -u 3533 manalo'
      },
      {
        id: 2,
        instruction: 'Set password for manalo',
        instructionKo: 'manalo 사용자의 비밀번호를 설정하시오.',
        command: 'echo flectrag | passwd --stdin manalo'
      }
    ]
  },
  {
    id: 'httpd-installation',
    category: 'Server A',
    title: 'Install and Configure httpd',
    titleKo: 'httpd 패키지 설치 및 구성',
    description: `## You are the admin of \`devops-wala\` company and you need to install the \`httpd\` package on \`servera\`.
## You can use the below URLs:  \`http://content/rhel9.0/x86_64/dvd/BaseOS\` & \`http://content/rhel9.0/x86_64/dvd/Appstream\``,
    descriptionKo: '제시된 URL들을 사용하여 Yum 저장소를 설정하고 httpd 패키지를 설치하시오.',
    scenarios: [
      'BaseOS: http://content/rhel9.0/x86_64/dvd/BaseOS',
      'Appstream: http://content/rhel9.0/x86_64/dvd/Appstream',
      'Repo File: /etc/yum.repos.d/rhel.repo',
      'Package: httpd'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Open the repository configuration file with vim',
        instructionKo: 'vim 에디터로 리포지토리 설정 파일을 여시오.',
        command: 'vim /etc/yum.repos.d/rhel.repo'
      },
      {
        id: 2,
        instruction: 'Configure the BaseOS and Appstream repositories',
        instructionKo: 'BaseOS와 Appstream 리포지토리를 설정하시오.',
        isMultiLine: true,
        command: `[BaseOS]
name = BaseOS
baseurl = http://content/rhel9.0/x86_64/dvd/BaseOS
enabled = 1
gpgcheck = 0

[Appstream]
name = Appstream
baseurl = http://content/rhel9.0/x86_64/dvd/Appstream
enabled = 1
gpgcheck = 0`
      },
      {
        id: 3,
        instruction: 'Verify the repository configuration',
        instructionKo: '리포지토리 설정 변경 여부를 확인하시오.',
        command: 'dnf repolist -v'
      },
      {
        id: 4,
        instruction: 'Install the httpd package',
        instructionKo: 'httpd 패키지를 설치하시오.',
        command: 'dnf -y install httpd'
      }
    ]
  },
  {
    id: 'selinux-debug-port82',
    category: 'Server A',
    title: 'Debug SELinux',
    titleKo: 'SELinux 디버깅 (포트 82)',
    description: `## A web server running on non-standard port 82 is having issues serving content. Troubleshoot to meet the following conditions:

- The system's web server must be able to serve all existing HTML files in \`/var/www/html\`. (Note: Do not delete or modify the contents of existing files)
- The web server should serve on port 82
- The web server should start automatically when the system starts`,
    descriptionKo: `## 비표준 포트 82에서 실행 중인 웹 서버가 서비스 제공 시 문제를 겪고 있다. 다음 조건을 충족하도록 트러블슈팅을 하라:

- 시스템의 웹 서버가 \`/var/www/html\`에 있는 모든 기존 HTML 파일을 제공할 수 있어야 한다. (참고: 기존 파일의 내용을 삭제하거나 수정하지 말것)
- 웹 서버가 포트 82로 서비스가 되도록 하라
- 웹 서버가 시스템이 시작될 때 자동으로 시작되어야 한다`,
    scenarios: [
      'Port: 82/tcp',
      'Document Root: /var/www/html',
      'SELinux Context: httpd_sys_content_t',
      'Service: httpd (auto-start enabled)'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Check the httpd service status',
        instructionKo: 'httpd 서비스 상태를 확인하시오.',
        command: 'systemctl status httpd'
      },
      {
        id: 2,
        instruction: 'Check the SELinux file context of /var/www/html',
        instructionKo: '/var/www/html 디렉토리의 SELinux 파일 컨텍스트를 확인하시오.',
        command: 'ls -Z /var/www/html'
      },
      {
        id: 3,
        instruction: 'Modify the SELinux file context for the HTML file',
        instructionKo: 'HTML 파일의 SELinux 파일 컨텍스트를 수정하시오.',
        command: 'semanage fcontext -m -t httpd_sys_content_t /var/www/html/file1'
      },
      {
        id: 4,
        instruction: 'Apply the SELinux context changes',
        instructionKo: 'SELinux 컨텍스트 변경 사항을 적용하시오.',
        command: 'restorecon -Rv /var/www/html'
      },
      {
        id: 5,
        instruction: 'Add port 82 to SELinux http_port_t',
        instructionKo: 'SELinux http_port_t에 포트 82를 추가하시오.',
        command: 'semanage port -a -t http_port_t -p tcp 82'
      },
      {
        id: 6,
        instruction: 'Add port 82/tcp to the firewall permanently',
        instructionKo: '방화벽에 포트 82/tcp를 영구적으로 추가하시오.',
        command: 'firewall-cmd --permanent --add-port=82/tcp'
      },
      {
        id: 7,
        instruction: 'Add http service to the firewall permanently',
        instructionKo: '방화벽에 http 서비스를 영구적으로 추가하시오.',
        command: 'firewall-cmd --permanent --add-service=http'
      },
      {
        id: 8,
        instruction: 'Reload the firewall to apply changes',
        instructionKo: '변경 사항을 적용하기 위해 방화벽을 리로드하시오.',
        command: 'firewall-cmd --reload'
      },
      {
        id: 9,
        instruction: 'Enable and start the httpd service',
        instructionKo: 'httpd 서비스를 활성화하고 시작하시오.',
        command: 'systemctl enable --now httpd'
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
        command: 'systemctl start httpd'
      },
      {
        id: 2,
        instruction: 'Enable the httpd service to start on boot',
        instructionKo: '시스템 부팅 시 httpd 서비스가 자동 시작되도록 설정하시오.',
        command: 'systemctl enable httpd'
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
        command: 'echo devops-wala | passwd --stdin punit1'
      },
      {
        id: 3,
        instruction: 'Open the crontab editor for user punit1',
        instructionKo: 'punit1 사용자의 크론탭 에디터를 여시오.',
        command: 'crontab -u punit1 -e'
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
        command: 'crontab -u punit1 -l'
      }
    ]
  },
  {
    id: 'cron-job-harry',
    category: 'Server A',
    title: 'Configure Cron Job for Harry',
    titleKo: '크론탭(Cron Job) 설정 - harry',
    description: `## Configure a cron job for user harry to run \`/usr/bin/echo hello\` every day at 14:23.`,
    descriptionKo: `## harry 사용자로 매일 14:23에 \`/usr/bin/echo hello\`를 실행하는 cron 작업을 설정하라.`,
    scenarios: [
      'User: harry',
      'Schedule: 14:23 daily',
      'Command: /usr/bin/echo hello'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Check the crond service status',
        instructionKo: 'crond 서비스 상태를 확인하시오.',
        command: 'systemctl status crond'
      },
      {
        id: 2,
        instruction: 'Enable and start the crond service',
        instructionKo: 'crond 서비스를 활성화하고 시작하시오.',
        command: 'systemctl enable --now crond'
      },
      {
        id: 3,
        instruction: 'Open the crontab editor for user harry',
        instructionKo: 'harry 사용자의 크론탭 에디터를 여시오.',
        command: 'crontab -u harry -e'
      },
      {
        id: 4,
        instruction: 'Configure crontab entry for daily execution at 14:23',
        instructionKo: '매일 14:23에 실행되는 크론탭 항목을 작성하시오.',
        isMultiLine: true,
        command: '23 14 * * * /usr/bin/echo hello'
      },
      {
        id: 5,
        instruction: 'Verify the crontab for user harry',
        instructionKo: 'harry 사용자의 크론탭 항목을 확인하시오.',
        command: 'crontab -u harry -l'
      }
    ]
  },
  {
    id: 'find-files-by-owner',
    category: 'Server A',
    title: 'Find Files by Owner',
    titleKo: '파일 찾기 (소유자별)',
    description: `## Find all files owned by \`jacques\` and place a copy of them in the \`/root/findfiles\` directory.`,
    descriptionKo: `## \`jacques\`가 소유한 모든 파일을 찾아 그 복사본을 \`/root/findfiles\` 디렉토리에 넣으세요.`,
    scenarios: [
      'Owner: jacques',
      'Destination: /root/findfiles'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Create the destination directory',
        instructionKo: '대상 디렉토리를 생성하시오.',
        command: 'mkdir /root/findfiles'
      },
      {
        id: 2,
        instruction: 'Find all files owned by jacques and copy them',
        instructionKo: 'jacques가 소유한 모든 파일을 찾아 복사하시오.',
        command: 'find / -user jacques -exec cp -a {} /root/findfiles \\;'
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
        command: 'find /home/student -name devops.txt -user punit -exec cp -a {} /data/question3-files \\;'
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
        command: 'find / -user punit -exec cp -a {} /data/question4-files/flower \\;'
      },
      {
        id: 6,
        instruction: 'Verify the copied files',
        instructionKo: '복사된 파일들을 확인하시오.',
        command: 'ls -latr /data/question4-files/flower'
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
        command: 'find /usr/share -type f -size -1M > /root/question5-find-output.txt'
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
        instructionKo: 'Question 6 결과 저장을 위한 디렉토리를 생성하시오.',
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
        command: 'dnf -y install autofs'
      },
      {
        id: 2,
        instruction: 'Enable and start autofs',
        instructionKo: 'autofs 서비스를 활성화하고 시작하시오.',
        command: 'systemctl enable --now autofs'
      },
      {
        id: 3,
        instruction: 'Open the master map file with vim',
        instructionKo: '/etc/auto.master 파일을 vim 에디터로 여시오.',
        command: 'vim /etc/auto.master'
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
        instruction: 'Open the indirect map file with vim',
        instructionKo: '/etc/auto.misc 파일을 vim 에디터로 여시오.',
        command: 'vim /etc/auto.misc'
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
        instruction: 'Restart autofs to apply changes',
        instructionKo: '변경 사항을 적용하기 위해 autofs 서비스를 재시작하시오.',
        command: 'systemctl restart autofs'
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
    id: 'autofs-remote-home',
    category: 'Server A',
    title: 'Configure AutoFS for Remote Home',
    titleKo: 'AutoFS 원격 홈 디렉토리 설정',
    description: `## Configure autofs to automatically mount remote user home directories as follows:

- \`materials.example.com\` (172.25.254.254) has an NFS shared directory \`/rhome\`. This filesystem contains a pre-configured home directory for user \`remoteuser1\`.
- The home directory for \`remoteuser1\` is \`materials.example.com:/rhome/remoteuser1\`.
- The home directory for \`remoteuser1\` should be automatically mounted under \`/rhome/remoteuser1\` on the local system.
- The home directory must be writable by the user.
- The password for \`remoteuser1\` is \`flectrag\`.`,
    descriptionKo: `## autofs를 설정하여 원격 사용자의 홈 디렉토리를 아래 요구대로 자동으로 마운트되도록 하세요.

- \`materials.example.com\` (172.25.254.254)에는 NFS 공유 디렉토리 \`/rhome\`이 있습니다. 이 파일 시스템에는 사용자 \`remoteuser1\`에 대해 사전 구성된 홈 디렉토리가 포함됩니다.
- \`remoteuser1\`의 홈 디렉토리는 \`materials.example.com:/rhome/remoteuser1\`입니다.
- \`remoteuser1\`의 홈 디렉토리는 로컬의 \`/rhome\` 디렉토리 하위의 \`/rhome/remoteuser1\`로 자동으로 마운트되어야 합니다.
- 홈 디렉토리는 사용자가 쓰기 가능해야 합니다.
- \`remoteuser1\`의 비밀번호는 \`flectrag\`입니다.`,
    scenarios: [
      'NFS Server: materials.example.com (172.25.254.254)',
      'Remote Path: /rhome/remoteuser1',
      'Local Mount: /rhome/remoteuser1',
      'User: remoteuser1',
      'Password: flectrag'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Install the autofs package',
        instructionKo: 'autofs 패키지를 설치하시오.',
        command: 'dnf -y install autofs'
      },
      {
        id: 2,
        instruction: 'Enable and start the autofs service',
        instructionKo: 'autofs 서비스를 활성화하고 시작하시오.',
        command: 'systemctl enable --now autofs'
      },
      {
        id: 3,
        instruction: 'Open the master map file with vim',
        instructionKo: '/etc/auto.master 파일을 vim 에디터로 여시오.',
        command: 'vim /etc/auto.master'
      },
      {
        id: 4,
        instruction: 'Configure /etc/auto.master to manage /rhome',
        instructionKo: '/rhome 디렉토리 관리를 위해 /etc/auto.master 파일을 수정하시오.',
        isMultiLine: true,
        command: '/rhome /etc/auto.rhome'
      },
      {
        id: 5,
        instruction: 'Create and open the indirect map file',
        instructionKo: '/etc/auto.rhome 파일을 생성하고 여시오.',
        command: 'vim /etc/auto.rhome'
      },
      {
        id: 6,
        instruction: 'Configure /etc/auto.rhome for the remoteuser1 mount',
        instructionKo: 'remoteuser1 마운트 설정을 위해 /etc/auto.rhome 파일을 수정하시오.',
        isMultiLine: true,
        command: 'remoteuser1 -rw materials.example.com:/rhome/remoteuser1'
      },
      {
        id: 7,
        instruction: 'Restart autofs service to apply changes',
        instructionKo: '변경 사항을 적용하기 위해 autofs 서비스를 재시작하시오.',
        command: 'systemctl restart autofs'
      },
      {
        id: 8,
        instruction: 'Verify the mount by accessing the directory',
        instructionKo: '디렉토리에 접근하여 마운트를 확인하시오.',
        command: 'ls -ltr /rhome/remoteuser1'
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
      'Service: chronyd',
      'Config File: /etc/chrony.conf',
      'Reference: iburst option'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Check the status of NTP service (chronyd)',
        instructionKo: 'chronyd 서비스의 상태를 확인하시오.',
        command: 'systemctl status chronyd'
      },
      {
        id: 2,
        instruction: 'Set the system clock to use NTP',
        instructionKo: '시스템 시계가 NTP를 사용하도록 설정하시오.',
        command: 'timedatectl set-ntp true'
      },
      {
        id: 3,
        instruction: 'Open /etc/chrony.conf with vim',
        instructionKo: '/etc/chrony.conf 파일을 vim 에디터로 여시오.',
        command: 'vim /etc/chrony.conf'
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
        command: 'systemctl restart chronyd'
      },
      {
        id: 6,
        instruction: 'Verify the NTP status and source',
        instructionKo: 'NTP 동기화 상태와 소스를 확인하시오.',
        command: 'systemctl status chronyd'
      },
      {
        id: 7,
        instruction: 'Enable the chronyd-restricted service',
        instructionKo: 'chronyd-restricted 서비스를 활성화(enable) 하시오.',
        command: 'systemctl enable chronyd-restricted'
      }
    ]
  },
  {
    id: 'ntp-client-configuration',
    category: 'Server A',
    title: 'Configure NTP Client',
    titleKo: 'NTP 클라이언트 설정',
    description: `## Configure the system as an NTP client of \`materials.example.com\`.`,
    descriptionKo: `## 시스템을 \`materials.example.com\`의 NTP 클라이언트로 구성하세요.`,
    scenarios: [
      'NTP Server: materials.example.com',
      'Service: chronyd',
      'Config File: /etc/chrony.conf'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Check the chronyd service status',
        instructionKo: 'chronyd 서비스 상태를 확인하시오.',
        command: 'systemctl status chronyd'
      },
      {
        id: 2,
        instruction: 'Enable and start the chronyd service',
        instructionKo: 'chronyd 서비스를 활성화하고 시작하시오.',
        command: 'systemctl enable --now chronyd'
      },
      {
        id: 3,
        instruction: 'Open /etc/chrony.conf with vim',
        instructionKo: '/etc/chrony.conf 파일을 vim 에디터로 여시오.',
        command: 'vim /etc/chrony.conf'
      },
      {
        id: 4,
        instruction: 'Add the NTP server configuration',
        instructionKo: 'NTP 서버 설정을 추가하시오.',
        isMultiLine: true,
        command: 'server materials.example.com iburst'
      },
      {
        id: 5,
        instruction: 'Restart the chronyd service',
        instructionKo: 'chronyd 서비스를 재시작하시오.',
        command: 'systemctl restart chronyd'
      },
      {
        id: 6,
        instruction: 'Verify the NTP sources',
        instructionKo: 'NTP 소스를 확인하시오.',
        command: 'chronyc sources'
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
    id: 'podman-build-containerfile',
    category: 'Server A',
    title: 'Podman: Build from Containerfile',
    titleKo: 'Podman: Containerfile로 이미지 빌드',
    description: `## As user \`wallah\`, download \`http://classroom/Containerfile\`.
Without modifying the contents of this file, build an image named \`pdf\`.`,
    descriptionKo: `## \`wallah\` 사용자로 \`http://classroom/Containerfile\`을(를) 다운로드하세요.
이 파일의 내용을 수정하지 말고, 이미지 이름을 \`pdf\`로 하여 빌드하세요.`,
    scenarios: [
      'User: wallah',
      'Containerfile URL: http://classroom/Containerfile',
      'Image Name: pdf',
      'Registry: registry.lab.example.com'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Install container-tools package',
        instructionKo: 'container-tools 패키지를 설치하시오.',
        command: 'dnf -y install container-tools'
      },
      {
        id: 2,
        instruction: 'Switch to wallah user on node1',
        instructionKo: 'node1에서 wallah 사용자로 전환하시오.',
        command: 'ssh wallah@node1'
      },
      {
        id: 3,
        instruction: 'Download the Containerfile',
        instructionKo: 'Containerfile을 다운로드하시오.',
        command: 'wget http://classroom/Containerfile'
      },
      {
        id: 4,
        instruction: 'Login to the container registry',
        instructionKo: '컨테이너 레지스트리에 로그인하시오.',
        command: 'podman login -u admin -p redhat321 registry.lab.example.com'
      },
      {
        id: 5,
        instruction: 'Build the image named pdf',
        instructionKo: 'pdf라는 이름으로 이미지를 빌드하시오.',
        command: 'podman build -t pdf .'
      }
    ]
  },
  {
    id: 'podman-systemd-wallah',
    category: 'Server A',
    title: 'Podman: Container Systemd Service',
    titleKo: 'Podman: 컨테이너 Systemd 서비스 구성',
    description: `## Configure a systemd service for a container as user \`wallah\`.

- Container name: \`ascii2pdf\`
- Use the \`pdf\` image created earlier.
- The service should start automatically on system reboot without manual intervention.
- Configure the service to automatically mount \`/opt/file\` to \`/dir1\` and \`/opt/progress\` to \`/dir2\` when the container starts.`,
    descriptionKo: `## 사용자 \`wallah\`로 컨테이너에 대한 systemd 서비스를 구성합니다.

- 컨테이너 이름: \`ascii2pdf\`
- 앞서 생성한 \`pdf\` 이미지를 사용하세요.
- 수동 개입 없이 시스템 재부팅시 자동으로 서비스를 시작합니다.
- 컨테이너 시작 시 \`/opt/file\`을 \`/dir1\`에, \`/opt/progress\`를 \`/dir2\`에 자동으로 마운트하도록 서비스를 구성합니다.`,
    scenarios: [
      'User: wallah',
      'Container Name: ascii2pdf',
      'Image: pdf',
      'Mounts: /opt/file -> /dir1, /opt/progress -> /dir2',
      'Auto-start on reboot: enabled'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Create directories and set ownership',
        instructionKo: '디렉토리를 생성하고 소유권을 설정하시오.',
        command: 'sudo mkdir /opt/{file,progress} && sudo chown wallah:wallah /opt/{file,progress}'
      },
      {
        id: 2,
        instruction: 'Run the container with volume mounts',
        instructionKo: '볼륨 마운트와 함께 컨테이너를 실행하시오.',
        command: 'podman run -d --name ascii2pdf -v /opt/file:/dir1:Z -v /opt/progress:/dir2:Z pdf'
      },
      {
        id: 3,
        instruction: 'Generate the systemd unit file',
        instructionKo: 'systemd unit 파일을 생성하시오.',
        command: 'podman generate systemd -n ascii2pdf -f --new'
      },
      {
        id: 4,
        instruction: 'Create the systemd user directory and move the service file',
        instructionKo: 'systemd 사용자 디렉토리를 생성하고 서비스 파일을 이동하시오.',
        command: 'mkdir -p ~/.config/systemd/user && mv ~/container-ascii2pdf.service ~/.config/systemd/user'
      },
      {
        id: 5,
        instruction: 'Reload the user systemd daemon',
        instructionKo: '사용자 systemd 데몬을 리로드하시오.',
        command: 'systemctl --user daemon-reload'
      },
      {
        id: 6,
        instruction: 'Enable and start the container service',
        instructionKo: '컨테이너 서비스를 활성화하고 시작하시오.',
        command: 'systemctl enable --now --user container-ascii2pdf'
      },
      {
        id: 7,
        instruction: 'Enable user lingering for wallah',
        instructionKo: 'wallah 사용자에 대해 lingering을 활성화하시오.',
        command: 'loginctl enable-linger'
      },
      {
        id: 8,
        instruction: 'Verify linger status for wallah',
        instructionKo: 'wallah 사용자의 linger 상태를 확인하시오.',
        command: 'loginctl show-user wallah'
      },
      {
        id: 9,
        instruction: 'Verify the container is running after reboot',
        instructionKo: '재부팅 후 컨테이너가 실행 중인지 확인하시오.',
        command: 'podman ps'
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
    id: 'collaborative-directory-managers',
    category: 'User & Group',
    title: 'Collaborative Directory Creation',
    titleKo: '협력 디렉토리 생성',
    description: `## Create a collaborative directory \`/home/managers\` with the following characteristics:

- The group owner of \`/home/managers\` should be \`sysmgrs\`.
- The directory should be readable, writable, and accessible only by members of the \`sysmgrs\` group. Other users should not have these permissions. (Of course, root can access all files and directories on the system.)
- Files created in \`/home/managers\` should automatically have their group ownership set to the \`sysmgrs\` group.

### Setting Special Permissions
- Symbolic: setuid = u+s; setgid = g+s; sticky = o+t
- Octal: In the added fourth preceding digit; setuid = 4; setgid = 2; sticky = 1`,
    descriptionKo: `## 다음 특징을 가진 협업 디렉토리 \`/home/managers\`를 생성하세요:

- \`/home/managers\`의 그룹 소유자는 \`sysmgrs\`여야 합니다.
- 디렉토리는 \`sysmgrs\` 그룹의 구성원만 읽기, 쓰기 및 접근할 수 있으며, 다른 사용자는 이러한 권한을 가지지 않습니다. (물론, root 사용자는 시스템의 모든 파일과 디렉토리에 접근할 수 있습니다.)
- \`/home/managers\`에 생성된 파일은 자동으로 그룹 소유권이 \`sysmgrs\` 그룹으로 설정되어야 합니다.

### 특수 권한 설정
- Symbolic: setuid = u+s; setgid = g+s; sticky = o+t
- Octal: 4번째 자리 숫자; setuid = 4; setgid = 2; sticky = 1`,
    scenarios: [
      'Directory: /home/managers',
      'Group Owner: sysmgrs',
      'Permissions: group:rwx, other:---',
      'SGID: Files inherit sysmgrs group ownership'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Create the managers directory',
        instructionKo: 'managers 디렉토리를 생성하시오.',
        command: 'mkdir /home/managers'
      },
      {
        id: 2,
        instruction: 'Change the group ownership to sysmgrs',
        instructionKo: '디렉토리의 그룹 소유권을 sysmgrs로 변경하시오.',
        command: 'chown :sysmgrs /home/managers'
      },
      {
        id: 3,
        instruction: 'Set permissions with SGID (2770)',
        instructionKo: 'SGID를 포함한 권한(2770)을 설정하시오.',
        command: 'chmod 2770 /home/managers'
      },
      {
        id: 4,
        instruction: 'Verify directory permissions and SGID',
        instructionKo: '디렉토리의 권한과 SGID 설정을 확인하시오.',
        command: 'ls -ld /home/managers'
      }
    ]
  },
  {
    id: 'sudo-sysmgrs-nopasswd',
    category: 'User & Group',
    title: 'Configure Sudo for sysmgrs Group',
    titleKo: 'sudo 설정',
    description: `## Configure sudo access for the \`sysmgrs\` group

Allow members of the \`sysmgrs\` group to use \`sudo\` without entering a password.

### Key Concepts:
- \`/etc/sudoers.d/\`: Drop-in directory for additional sudoers configurations
- \`visudo\`: Safe editor for sudoers files with syntax checking
- \`NOPASSWD\`: Allows sudo commands without password prompt`,
    descriptionKo: `## \`sysmgrs\` 그룹에 대한 sudo 접근 설정

\`sysmgrs\` 그룹 구성원이 sudo를 사용할 때 비밀번호를 입력하지 않도록 허용하세요.

### 핵심 개념:
- \`/etc/sudoers.d/\`: 추가 sudoers 설정을 위한 드롭인 디렉토리
- \`visudo\`: 구문 검사를 포함한 sudoers 파일 안전 편집기
- \`NOPASSWD\`: 비밀번호 입력 없이 sudo 명령 실행 허용`,
    scenarios: [
      'Group: sysmgrs',
      'Sudo: NOPASSWD for all commands',
      'Config file: /etc/sudoers.d/sysmgrs-group'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Create a sudoers drop-in file for the sysmgrs group',
        instructionKo: 'sysmgrs 그룹을 위한 sudoers 드롭인 파일을 생성하시오.',
        command: "echo '%sysmgrs ALL=(ALL) NOPASSWD: ALL' > /etc/sudoers.d/sysmgrs-group"
      },
      {
        id: 2,
        instruction: 'Switch to natasha (a sysmgrs member) to verify',
        instructionKo: 'natasha(sysmgrs 그룹 구성원)로 전환하여 확인하시오.',
        command: 'su - natasha'
      },
      {
        id: 3,
        instruction: 'Verify sudo works without password',
        instructionKo: '비밀번호 없이 sudo가 작동하는지 확인하시오.',
        command: 'sudo cat /etc/shadow'
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
        command: 'tar -cvzf /root/test1.tar.gz /var/log/*'
      },
      {
        id: 2,
        instruction: 'Create a bzip2 compressed archive of /var/log/ in /root/test2.tar.bz2',
        instructionKo: '/var/log/ 디렉토리를 bzip2 방식으로 압축하여 /root/test2.tar.bz2 아카이브를 생성하시오.',
        command: 'tar -cvjf /root/test2.tar.bz2 /var/log/*'
      },
      {
        id: 3,
        instruction: 'Extract the gzip archive /root/test1.tar.gz',
        instructionKo: '/root/test1.tar.gz 아카이브의 압축을 해제하시오.',
        command: 'tar -xvzf /root/test1.tar.gz'
      },
      {
        id: 4,
        instruction: 'Extract the bzip2 archive /root/test2.tar.bz2',
        instructionKo: '/root/test2.tar.bz2 아카이브의 압축을 해제하시오.',
        command: 'tar -xvjf /root/test2.tar.bz2'
      }
    ]
  },
  {
    id: 'tar-backup-bzip2',
    category: 'File Management',
    title: 'Create Bzip2 Archive',
    titleKo: '아카이브 생성 (bzip2)',
    description: `## Create a tar archive containing the contents of \`/usr/local\`, compress it with bzip2, and save it as \`/root/backup.tar.bz2\`.`,
    descriptionKo: `## \`/usr/local\`의 내용을 포함하는 tar 아카이브를 생성하고, 이를 bzip2로 압축하여 \`/root/backup.tar.bz2\`로 저장하세요.`,
    scenarios: [
      'Source: /usr/local',
      'Destination: /root/backup.tar.bz2',
      'Compression: bzip2'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Create a bzip2 compressed tar archive of /usr/local',
        instructionKo: '/usr/local의 bzip2 압축 tar 아카이브를 생성하시오.',
        command: 'tar -cvjf /root/backup.tar.bz2 /usr/local'
      },
      {
        id: 2,
        instruction: 'Verify the archive contents',
        instructionKo: '아카이브 내용을 확인하시오.',
        command: 'tar -tf /root/backup.tar.bz2'
      }
    ]
  },
  {
    id: 'lvm-lvextend',
    category: 'Storage',
    title: 'LVM - lvextend',
    titleKo: 'LVM - 논리 볼륨 확장 (lvextend)',
    description: `## Resize the logical volume \`vo\` filesystem to 230MiB.

The contents of the filesystem must remain intact. Note that the exact partition size may not always match the requested size, so a size within the range of 213MiB to 243MiB is acceptable.`,
    descriptionKo: `## 논리 볼륨 \`vo\`의 파일 시스템 크기를 230MiB로 조정하세요.

파일 시스템의 내용은 그대로 유지되어야 합니다. 참고로, 파티션 크기가 요청된 크기와 정확히 일치하지 않는 경우가 많으므로, 213MiB에서 243MiB 범위의 크기는 허용됩니다.`,
    scenarios: [
      'Volume Group: myvol',
      'Logical Volume: vo',
      'Target Size: 230MiB (acceptable: 213~243MiB)',
      'Filesystem contents must be preserved'
    ],
    steps: [
      {
        id: 1,
        instruction: 'List all logical volumes in all volume groups',
        instructionKo: '모든 볼륨 그룹의 논리 볼륨을 확인하시오.',
        command: 'lvscan'
      },
      {
        id: 2,
        instruction: 'Extend the logical volume to 230MiB',
        instructionKo: '논리 볼륨을 230MiB로 확장하시오.',
        command: 'lvextend -L 230M /dev/myvol/vo'
      },
      {
        id: 3,
        instruction: 'Resize the ext filesystem to match the volume',
        instructionKo: 'ext 파일 시스템 크기를 볼륨에 맞게 조정하시오.',
        command: 'resize2fs /dev/myvol/vo'
      }
    ]
  },
  {
    id: 'swap-partition',
    category: 'Storage',
    title: 'Add Swap Partition',
    titleKo: '스왑 파티션 추가',
    description: `## Add an additional 512MiB swap partition to the system.

The swap partition must be automatically mounted when the system boots. Do not delete or modify any existing swap partitions on the system.`,
    descriptionKo: `## 시스템에 512MiB의 추가 스왑 파티션을 추가하세요.

스왑 파티션은 시스템이 부팅될 때 자동으로 마운트되어야 합니다. 시스템에 있는 기존 스왑 파티션은 삭제하거나 변경하지 마세요.`,
    scenarios: [
      'Swap Size: 512MiB',
      'Auto-mount on boot: /etc/fstab',
      'Existing swap: do not modify'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Check existing partition layout with parted',
        instructionKo: 'parted로 기존 파티션 레이아웃을 확인하시오.',
        command: 'parted /dev/vdb unit mib print'
      },
      {
        id: 2,
        instruction: 'Create a new swap partition (512MiB)',
        instructionKo: '512MiB 크기의 새 스왑 파티션을 생성하시오.',
        command: 'parted /dev/vdb mkpart my-swap linux-swap 722MiB 1234MiB'
      },
      {
        id: 3,
        instruction: 'Verify the new partition',
        instructionKo: '새 파티션을 확인하시오.',
        command: 'parted /dev/vdb print'
      },
      {
        id: 4,
        instruction: 'Format the partition as swap',
        instructionKo: '파티션을 스왑으로 포맷하시오.',
        command: 'mkswap /dev/vdb3'
      },
      {
        id: 5,
        instruction: 'Add the swap entry to /etc/fstab',
        instructionKo: '/etc/fstab에 스왑 항목을 추가하시오.',
        command: 'vim /etc/fstab'
      },
      {
        id: 6,
        instruction: 'Add the following line to /etc/fstab',
        instructionKo: '/etc/fstab에 다음 줄을 추가하시오.',
        isMultiLine: true,
        command: '/dev/vdb3 swap swap defaults 0 0'
      },
      {
        id: 7,
        instruction: 'Reload systemd daemon and activate swap',
        instructionKo: 'systemd 데몬을 리로드하고 스왑을 활성화하시오.',
        command: 'systemctl daemon-reload && swapon -a'
      },
      {
        id: 8,
        instruction: 'Verify the swap is active',
        instructionKo: '스왑이 활성화되었는지 확인하시오.',
        command: 'swapon --show'
      }
    ]
  },
  {
    id: 'lvm-lvcreate',
    category: 'Storage',
    title: 'LVM - lvcreate',
    titleKo: 'LVM - 논리 볼륨 생성 (lvcreate)',
    description: `## Create a logical volume named \`qa\` in the \`qagroup\` volume group with a size of 60 extents.

- The extent block size in the \`qagroup\` volume group must be 16MiB.
- Format the new logical volume with the \`vfat\` filesystem.
- Configure it to automatically mount at \`/mnt/qa\` on system boot.

> 60 PEs x 16MiB = 960MiB — the PV size must be larger than 960MiB.`,
    descriptionKo: `## \`qa\`라는 이름의 논리 볼륨을 \`qagroup\` 볼륨 그룹에 생성하고, 크기는 60개의 익스텐트 블록으로 설정하세요.

- \`qagroup\` 볼륨 그룹 내 논리 볼륨의 익스텐트 블록 크기는 16MiB여야 합니다.
- 새 논리 볼륨을 \`vfat\` 파일 시스템으로 포맷하고, 시스템 부팅 시 \`/mnt/qa\`에 자동으로 마운트되도록 설정하세요.

> 60PEs x 16MiB = 960MiB — PV 크기는 960MiB보다 커야 합니다. (넉넉히 잡아주도록)`,
    scenarios: [
      'Volume Group: qagroup',
      'Logical Volume: qa',
      'Extent Size: 16MiB',
      'Extents: 60 (= 960MiB)',
      'Filesystem: vfat',
      'Mount Point: /mnt/qa'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Check existing partition layout for start position',
        instructionKo: '시작 위치 확인을 위해 기존 파티션 레이아웃을 확인하시오.',
        command: 'parted /dev/vdb unit mib print'
      },
      {
        id: 2,
        instruction: 'Create a partition for the physical volume',
        instructionKo: '물리 볼륨용 파티션을 생성하시오.',
        command: 'parted /dev/vdb mkpart primary 1235mib 2500mib'
      },
      {
        id: 3,
        instruction: 'Create a physical volume',
        instructionKo: '물리 볼륨(PV)을 생성하시오.',
        command: 'pvcreate /dev/vdb4'
      },
      {
        id: 4,
        instruction: 'Create a volume group with 16MiB extent size',
        instructionKo: '익스텐트 크기 16MiB로 볼륨 그룹을 생성하시오.',
        command: 'vgcreate qagroup -s 16M /dev/vdb4'
      },
      {
        id: 5,
        instruction: 'Create a logical volume with 60 extents',
        instructionKo: '60개의 익스텐트로 논리 볼륨을 생성하시오.',
        command: 'lvcreate -n qa -l 60 qagroup'
      },
      {
        id: 6,
        instruction: 'Format the logical volume with vfat filesystem',
        instructionKo: '논리 볼륨을 vfat 파일 시스템으로 포맷하시오.',
        command: 'mkfs.vfat /dev/qagroup/qa'
      },
      {
        id: 7,
        instruction: 'Create the mount point directory',
        instructionKo: '마운트 포인트 디렉토리를 생성하시오.',
        command: 'mkdir /mnt/qa'
      },
      {
        id: 8,
        instruction: 'Add the mount entry to /etc/fstab',
        instructionKo: '/etc/fstab에 마운트 항목을 추가하시오.',
        command: 'vim /etc/fstab'
      },
      {
        id: 9,
        instruction: 'Add the following line to /etc/fstab',
        instructionKo: '/etc/fstab에 다음 줄을 추가하시오.',
        isMultiLine: true,
        command: '/dev/qagroup/qa /mnt/qa vfat defaults 0 0'
      },
      {
        id: 10,
        instruction: 'Reload systemd daemon and mount',
        instructionKo: 'systemd 데몬을 리로드하고 마운트하시오.',
        command: 'systemctl daemon-reload && mount /mnt/qa'
      },
      {
        id: 11,
        instruction: 'Verify the mount',
        instructionKo: '마운트를 확인하시오.',
        command: 'mount | grep /mnt/qa'
      }
    ]
  },
  {
    id: 'tuned-profile',
    category: 'Server A',
    title: 'Configure Tuned Profile',
    titleKo: 'tuned 프로파일 설정',
    description: `## Select the recommended tuned profile for the system and set it as the default.`,
    descriptionKo: `## 시스템에 권장되는 tuned 프로파일을 선택하고 기본 설정으로 설정하세요.`,
    scenarios: [
      'Service: tuned',
      'Recommended Profile: tuned-adm recommend',
      'Apply: tuned-adm profile'
    ],
    steps: [
      {
        id: 1,
        instruction: 'Install the tuned package',
        instructionKo: 'tuned 패키지를 설치하시오.',
        command: 'dnf -y install tuned'
      },
      {
        id: 2,
        instruction: 'Enable and start the tuned service',
        instructionKo: 'tuned 서비스를 활성화하고 시작하시오.',
        command: 'systemctl enable --now tuned'
      },
      {
        id: 3,
        instruction: 'Check the current active profile',
        instructionKo: '현재 활성화된 프로파일을 확인하시오.',
        command: 'tuned-adm active'
      },
      {
        id: 4,
        instruction: 'Check the recommended profile',
        instructionKo: '권장 프로파일을 확인하시오.',
        command: 'tuned-adm recommend'
      },
      {
        id: 5,
        instruction: 'Apply the recommended profile (e.g. virtual-guest)',
        instructionKo: '권장 프로파일(예: virtual-guest)을 적용하시오.',
        command: 'tuned-adm profile virtual-guest'
      },
      {
        id: 6,
        instruction: 'Verify the active profile has changed',
        instructionKo: '활성 프로파일이 변경되었는지 확인하시오.',
        command: 'tuned-adm active'
      }
    ]
  }
];

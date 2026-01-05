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
    description: 'Create groups admin, devops-wala and users punit, harry, peter, mon_ocp with specific requirements.',
    descriptionKo: 'admin, devops-wala 그룹과 punit, harry, peter, mon_ocp 사용자를 요구사항에 맞게 생성하시오.',
    scenarios: [
      'Group: admin, devops-wala',
      'User punit: admin group, UID 1234, /home/ocp-cluster, /bin/bash',
      'User harry: devops-wala group, UID 1334, /home/harry, /bin/bash',
      'User peter: devops-wala group, UID 1335, /home/peter, /bin/sh',
      'User mon_ocp: nologin shell',
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
        instructionKo: 'punit 사용자를 생성하시오.',
        command: 'useradd -G admin -u 1234 -s /bin/bash -d /home/ocp-cluster -c "For OCP Cluster" punit'
      },
      {
        id: 4,
        instruction: 'Create user harry',
        instructionKo: 'harry 사용자를 생성하시오.',
        command: 'useradd -G devops-wala -u 1334 -d /home/harry -s /bin/bash -c "For OCP Cluster" harry'
      },
      {
        id: 5,
        instruction: 'Create user peter',
        instructionKo: 'peter 사용자를 생성하시오.',
        command: 'useradd -G devops-wala -u 1335 -d /home/peter -s /bin/sh -c "For Database Cluster" peter'
      },
      {
        id: 6,
        instruction: 'Create user mon_ocp with non-interactive shell',
        instructionKo: '비대화형 쉘을 가진 mon_ocp 사용자를 생성하시오.',
        command: 'useradd -s /usr/sbin/nologin mon_ocp'
      },
      {
        id: 7,
        instruction: 'Set password for punit',
        instructionKo: 'punit 사용자의 비밀번호를 설정하시오.',
        command: 'echo "devops-wala" | passwd --stdin punit'
      },
      {
        id: 8,
        instruction: 'Set password for harry',
        instructionKo: 'harry 사용자의 비밀번호를 설정하시오.',
        command: 'echo "devops-wala" | passwd --stdin harry'
      },
      {
        id: 9,
        instruction: 'Set password for peter',
        instructionKo: 'peter 사용자의 비밀번호를 설정하시오.',
        command: 'echo "devops-wala" | passwd --stdin peter'
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
  }
];

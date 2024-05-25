import Navbar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';
import CodeHighlighter from '../../shared/CodeHighlighter';
import {
  codeSnippetActive,
  codeSnippetAllow,
  codeSnippetFirewall,
  codeSnippetOpen,
  codeSnippetServer,
  codeSnippetStatus,
  codeSnippetTest,
  codeSnippetVerbose,
} from './code-snippets/codeSnippets';
import blog5 from './assets/blog5.png';
import ubuntuvmimage from './assets/ubuntuvmimage.png';
type Props = {};

function BlogFive({}: Props) {
  return (
    <div className='bg-slate-900'>
      <Navbar />
      <div className='flex flex-col mx-4 md:mx-16 lg:mx-32 xl:mx-64 m-4 p-4 text-white font-mono gap-2'>
        <h1 className='text-3xl md:text-5xl font-bold py-4'>
          How to Set Up an SSH Connection Between a Virtual Machine and Host
          Machine
        </h1>

        <img
          src={blog5}
          alt='thumbnail'
          className='max-w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out'
        />
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          SSH (Secure Shell) is a powerful protocol used for securely accessing
          remote systems over a network. In this guide, we’ll walk through the
          steps to set up and test an SSH connection between a guest OS (virtual
          machine) and a host machine using VirtualBox and Ubuntu-based systems.
        </p>
        <h4 className='text-xl md:text-2xl font-semibold mt-6'>
          Setting Up SSH on the Guest OS (Virtual Machine)
        </h4>

        <h4 className='text-xl md:text-2xl font-semibold mt-6'>
          1. Install OpenSSH Server
        </h4>
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          Open a terminal on the guest OS and install the OpenSSH server using
          the following command:
        </p>
        <CodeHighlighter codeSnippet={codeSnippetServer} language='Bash' />
        <h4 className='text-xl md:text-2xl font-semibold mt-6'>
          2. Check SSH Status
        </h4>
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          Verify the status of the SSH service using:
        </p>
        <CodeHighlighter codeSnippet={codeSnippetStatus} language='Bash' />
        <h4 className='text-xl md:text-2xl font-semibold mt-6'>
          3. Enable and Start SSH Service if Inactive
        </h4>
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          If the SSH service is inactive, enable and start it using:
        </p>
        <CodeHighlighter codeSnippet={codeSnippetActive} language='Bash' />
        <h4 className='text-xl md:text-2xl font-semibold mt-6'>
          4. Firewall Configuration
        </h4>
        <p className='text-base md:text-lg leading-relaxed mt-4 font-semibold'>
          Check Firewall Status
        </p>
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          Ensure the firewall status using:
        </p>
        <CodeHighlighter codeSnippet={codeSnippetFirewall} language='Bash' />
        <p className='text-base md:text-lg leading-relaxed mt-4 font-semibold'>
          Check Open Ports
        </p>
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          Check for open ports using:
        </p>
        <CodeHighlighter codeSnippet={codeSnippetOpen} language='Bash' />
        <p className='text-base md:text-lg leading-relaxed mt-4 font-semibold'>
          Allow SSH Port 22 (if closed)
        </p>
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          If SSH port 22 is closed, allow it through the firewall:
        </p>
        <CodeHighlighter codeSnippet={codeSnippetAllow} language='Bash' />
        <p className='text-base md:text-lg leading-relaxed mt-4 font-semibold'>
          Check Firewall Status (Detailed)
        </p>
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          For a detailed view of firewall rules:
        </p>
        <CodeHighlighter codeSnippet={codeSnippetVerbose} language='Bash' />
        <p className='text-base md:text-lg leading-relaxed mt-4 font-semibold'>
          VirtualBox Network Settings
        </p>
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          In VirtualBox, set the network adapter to NAT and configure port
          forwarding as follows:
        </p>
        <ul className='list-disc ml-6'>
          <li>Name: ssh</li>
          <li>Protocol: TCP</li>
          <li>Host IP: (blank)</li>
          <li>Host Port: 2222</li>
          <li>Guest IP: (blank)</li>
          <li>Guest Port: 22</li>
        </ul>
        <img
          src={ubuntuvmimage}
          alt='thumbnail'
          className='max-w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out'
        />
        <h4 className='text-xl md:text-2xl font-semibold mt-6'>
          On the Host Machine
        </h4>

        <h4 className='text-xl md:text-2xl font-semibold mt-6'>
          1. Install OpenSSH Client
        </h4>
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          If not already installed, install the OpenSSH client on the host
          machine. Alternatively, use an SSH client like PuTTY.
        </p>
        <h4 className='text-xl md:text-2xl font-semibold mt-6'>
          2. Test SSH Connection
        </h4>
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          To test the SSH connection from the host machine to the guest OS, use:
        </p>
        <CodeHighlighter codeSnippet={codeSnippetTest} language='Bash' />
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          Replace <strong>username_of_guest_machine</strong> with the actual
          username of the guest OS.
        </p>
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          This guide provides comprehensive steps to configure an SSH
          connection, including installing OpenSSH, managing firewall rules, and
          testing the connection. By following these steps, you can securely
          access your virtual machine from the host machine using SSH.
        </p>
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          Note: Ensure that both the guest OS and host machine are properly
          configured with network settings and firewall rules to establish the
          SSH connection successfully.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default BlogFive;

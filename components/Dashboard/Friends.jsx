import React from 'react'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function Friends() {


    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          backgroundColor: '#44b700',
          color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));

    return (
        <div>
            <div className="friends">
                <div class="card friend-card mb-3">
                    <div class="card-body d-flex align-items-center justify-content-between">
                        <div className="friends-online">
                            <AvatarGroup max={4}>
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    variant="dot"
                                    className=''
                                >
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </StyledBadge>
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    variant="dot"
                                    className=''
                                >
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </StyledBadge>
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    variant="dot"
                                    className=''
                                >
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </StyledBadge>
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    variant="dot"
                                    className=''
                                >
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </StyledBadge>
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    variant="dot"
                                    className=''
                                >
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </StyledBadge>
                            </AvatarGroup>
                        </div>

                        <a href="#"><i class="fa-solid fa-plus"></i> Invite Friends</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Box,
    Chip,
    IconButton,
    alpha
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ImageComponent } from './ImageComponent';

const greenTheme = {
    primary: '#66bb6a',
    primaryDark: '#4caf50',
    primaryLight: '#e8f5e9',
    text: '#2e7d32',
};

export default function SpeciesInfoDialog({ open, species, onClose }) {
    if (!species) return null;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: 2,
                    borderTop: `4px solid ${greenTheme.primary}`
                }
            }}
        >
            {/* Header */}
            <DialogTitle
                sx={{
                    backgroundColor: greenTheme.primaryLight,
                    color: greenTheme.text,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    pr: 1,
                    pb: 2
                }}
            >
                <Box sx={{ flex: 1 }}>
                    {/* Common Name - Bold, first */}
                    {species.commonName && (
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                fontWeight: 700,
                                color: greenTheme.text,
                                mb: 0.5
                            }}
                        >
                            {species.commonName}
                        </Typography>
                    )}

                    {/* Scientific Name - Italic, below */}
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{
                            fontStyle: 'italic',
                            fontWeight: 400,
                            color: alpha(greenTheme.text, 0.8),
                            fontSize: '0.95rem'
                        }}
                    >
                        {species.name}
                    </Typography>
                </Box>

                <IconButton onClick={onClose} size="small">
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            {/* Content */}
            <DialogContent sx={{ 
                pt: 3,
                '&::-webkit-scrollbar': {
                    width: '8px',
                },
                '&::-webkit-scrollbar-track': {
                    backgroundColor: greenTheme.primaryLight,
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: greenTheme.primary,
                    borderRadius: '4px',
                }
            }}>
                {/* Image with Blurhash */}
                {species.info?.imageUrl && (
                    <Box
                        sx={{
                            width: '100%',
                            maxHeight: 600,
                            minHeight: 400,
                            mb: 0.1,
                            borderRadius: 2,
                            overflow: 'hidden',
                            boxShadow: 2
                        }}
                    >
                        <ImageComponent
                            src={species.info.imageUrl}
                            hash={species.info.blurhash || "L6PZfSi_.AyE_3t7t7R**0o#DgR4"}
                            aspectRatio="2/3"
                        />
                    </Box>
                )}

                {/* Photo Attribution */}
                {(species.info.photographer || species.info.sourceUrl) && (
                    <Box
                        sx={{
                            mb: 2,
                            px: 0,
                            textAlign: 'left'
                        }}
                    >
                        <Typography
                            variant="caption"
                            sx={{
                                color: alpha(greenTheme.text, 0.6),
                                fontSize: '0.75rem'
                            }}
                        >
                            © {species.info.photographer || 'Unknown'}
                            {species.info.sourceUrl && (
                                <>
                                    {' • '}
                                    <a
                                        href={species.info.sourceUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            color: greenTheme.primaryDark,
                                            textDecoration: 'none'
                                        }}
                                        onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                                        onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                                    >
                                        View Source
                                    </a>
                                </>
                            )}
                        </Typography>
                    </Box>
                )}

                {/* Distribution Info */}
                {species.info?.distribution && (
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" sx={{ color: greenTheme.primaryDark, mb: 1, fontWeight: 600 }}>
                            Distribution Range
                        </Typography>
                        <Box 
                            component="div"
                            sx={{ 
                                color: greenTheme.text,
                                fontSize: '0.875rem',
                                lineHeight: 1.6,
                                '& p': {
                                    margin: 0,
                                    marginBottom: '1em',
                                    '&:last-child': {
                                        marginBottom: 0
                                    }
                                }
                            }}
                            dangerouslySetInnerHTML={{ 
                                __html: (() => {
                                    const text = species.info.distribution;
                                    // If already has <p> tags, use as is
                                    if (text.includes('<p>')) {
                                        return text;
                                    }
                                    // If has double line breaks, split by them
                                    if (text.includes('\n\n')) {
                                        return text
                                            .split('\n\n')
                                            .filter(p => p.trim())
                                            .map(p => `<p>${p.trim()}</p>`)
                                            .join('');
                                    }
                                    // Otherwise, just wrap in a single p tag
                                    return `<p>${text}</p>`;
                                })()
                            }}
                        />
                    </Box>
                )}

                {/* Additional Info Chips */}
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                    {species.info?.habitat && (
                        <Chip
                            label={`Habitat: ${species.info.habitat}`}
                            size="small"
                            sx={{ backgroundColor: greenTheme.primaryLight }}
                        />
                    )}
                    {species.info?.conservationStatus && (
                        <Chip
                            label={species.info.conservationStatus}
                            size="small"
                            color="success"
                        />
                    )}
                </Box>

                {/* Source Attribution */}
                {species.info?.source && (
                    <Box
                        sx={{
                            mt: 'auto',
                            pt: 1,
                            borderTop: `1px solid ${alpha(greenTheme.text, 0.1)}`
                        }}
                    >
                        <Typography
                            variant="caption"
                            sx={{
                                color: alpha(greenTheme.text, 0.6),
                                fontSize: '0.75rem'
                            }}
                        >
                            Source: {species.info.source}
                        </Typography>
                    </Box>
                )}
            </DialogContent>

            {/* Footer */}
            <DialogActions sx={{ px: 3, pb: 2 }}>
                <Button
                    onClick={onClose}
                    variant="contained"
                    sx={{
                        backgroundColor: greenTheme.primary,
                        '&:hover': {
                            backgroundColor: greenTheme.primaryDark
                        }
                    }}
                >
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}